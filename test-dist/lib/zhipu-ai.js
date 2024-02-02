"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var jwt_1 = require("./jwt");
var axios_1 = __importDefault(require("axios"));
var completions_1 = __importDefault(require("./completions"));
var ZhipuAI = /** @class */ (function () {
    function ZhipuAI(options) {
        var _this = this;
        this.options = options;
        if (!options.apiKey)
            options.apiKey = process.env['ZHIPUAI_API_KEY'] || '';
        assert_1.default.ok(options.apiKey, "未提供api_key，请通过参数或环境变量提供");
        if (!options.baseUrl)
            options.baseUrl = process.env["ZHIPUAI_BASE_URL"] || '';
        if (!options.baseUrl)
            options.baseUrl = "https://open.bigmodel.cn/api/paas/v4";
        this.request = axios_1.default.create({
            baseURL: options.baseUrl,
            timeout: options.timeout,
            headers: options.customHeaders
        });
        this.request.interceptors.request.use(function (config) {
            config.headers.set(_this.authHeaders());
            return config;
        });
    }
    ZhipuAI.prototype.post = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request.post(url, data, config)];
            });
        });
    };
    ZhipuAI.prototype.createCompletions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new completions_1.default(this).create(options)];
            });
        });
    };
    ZhipuAI.prototype.authHeaders = function () {
        var token = (0, jwt_1.generateToken)(this.options.apiKey);
        console.log(token);
        return { "Authorization": token };
    };
    return ZhipuAI;
}());
exports.default = ZhipuAI;
