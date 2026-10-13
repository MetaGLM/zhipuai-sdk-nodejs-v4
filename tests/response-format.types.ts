import type { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

type CreateCompletionsOptions = Parameters<ZhipuAI['createCompletions']>[0];

const base = { model: 'test-model', messages: [] };
const omitted: CreateCompletionsOptions = base;
const text: CreateCompletionsOptions = { ...base, responseFormat: { type: 'text' } };
const json: CreateCompletionsOptions = { ...base, responseFormat: { type: 'json_object' } };

const unsupported: CreateCompletionsOptions = {
    ...base,
    // @ts-expect-error Only the documented response formats are supported.
    responseFormat: { type: 'json_schema' },
};
const missingType: CreateCompletionsOptions = {
    ...base,
    // @ts-expect-error A response format must specify its type.
    responseFormat: {},
};

void [omitted, text, json, unsupported, missingType];
