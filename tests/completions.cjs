const assert = require('assert');
const http = require('http');

async function main() {
    const clients = [
        ['CommonJS', require('../dist/index.cjs').ZhipuAI],
        ['ES module', (await import('../dist/index.js')).ZhipuAI],
    ];
    const received = [];
    const response = { choices: [{ message: { content: '{"ok":true}' } }] };
    const failure = { error: { code: 'test_error', message: 'Synthetic failure' } };
    let failNext = false;
    const server = http.createServer(async (request, reply) => {
        const chunks = [];
        for await (const chunk of request) chunks.push(chunk);
        received.push({
            method: request.method,
            url: request.url,
            body: JSON.parse(Buffer.concat(chunks).toString()),
            testHeader: request.headers['x-test'],
        });
        reply.setHeader('Content-Type', 'application/json');
        reply.statusCode = failNext ? 400 : 200;
        reply.end(JSON.stringify(failNext ? failure : response));
        failNext = false;
    });
    await new Promise((resolve, reject) => {
        server.once('error', reject);
        server.listen(0, '127.0.0.1', resolve);
    });

    let passed = 0;
    let failed = 0;
    async function test(name, run) {
        try {
            await run();
            passed++;
            console.log(`PASS ${name}`);
        } catch (error) {
            failed++;
            console.error(`FAIL ${name}: ${error.message}`);
        }
    }

    try {
        for (const [name, Client] of clients) {
            const client = new Client({
                apiKey: 'test.synthetic-secret',
                baseUrl: `http://127.0.0.1:${server.address().port}`,
                timeout: 5000,
            });
            // Keep all requests local even when the test environment has a proxy.
            client.request.request.defaults.proxy = false;
            for (const format of [undefined, 'text', 'json_object']) {
                await test(`${name}: ${format || 'omitted'} response format`, async () => {
                    const options = {
                        model: 'test-model',
                        messages: [{ role: 'user', content: 'Return a JSON object.' }],
                        stream: false,
                        requestId: 'test-request',
                        extraHeaders: { 'x-test': name },
                    };
                    if (format) options.responseFormat = { type: format };
                    const result = await client.createCompletions(options);
                    const expected = {
                        model: options.model,
                        request_id: options.requestId,
                        messages: options.messages,
                        stream: false,
                    };
                    if (format) expected.response_format = { type: format };
                    assert.deepStrictEqual(received.pop(), {
                        method: 'POST', url: '/chat/completions',
                        body: expected, testHeader: name,
                    });
                    assert.deepStrictEqual(result, response);
                });
            }
            await test(`${name}: preserves API errors`, async () => {
                failNext = true;
                await assert.rejects(
                    client.completions.create({
                        model: 'test-model',
                        messages: [],
                        responseFormat: { type: 'json_object' },
                    }),
                    error => {
                        assert.deepStrictEqual(error, failure);
                        return true;
                    },
                );
                assert.deepStrictEqual(received.pop().body.response_format, { type: 'json_object' });
            });
        }
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
    console.log(`${passed} passed, ${failed} failed`);
    if (failed) process.exitCode = 1;
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
