"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logWarning = exports.logSuccess = exports.logInfo = void 0;
var style = __importStar(require("./style"));
function logInfo(text) {
    console.log(style.info(text));
}
exports.logInfo = logInfo;
function logSuccess(text) {
    console.log(style.success(text));
}
exports.logSuccess = logSuccess;
function logWarning(text) {
    console.log(style.warning(text));
}
exports.logWarning = logWarning;
function logError(text) {
    console.log(style.error(text));
}
exports.logError = logError;
