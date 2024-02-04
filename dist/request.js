var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// lib/request.ts
import Axios from "axios";
var Request = class {
  constructor(app, config) {
    this.app = app;
    __publicField(this, "request");
    this.request = Axios.create(config);
    this.request.interceptors.request.use((config2) => {
      config2.headers.set(this.app.authHeaders());
      return config2;
    });
  }
  post(url, data, config) {
    return __async(this, null, function* () {
      return this.request.post(url, data, config);
    });
  }
  get(url, config) {
    return __async(this, null, function* () {
      return this.request.get(url, config);
    });
  }
  put(url, data, config) {
    return __async(this, null, function* () {
      return this.request.put(url, data, config);
    });
  }
  delete(url, config) {
    return __async(this, null, function* () {
      return this.request.delete(url, config);
    });
  }
};
export {
  Request as default
};
//# sourceMappingURL=request.js.map