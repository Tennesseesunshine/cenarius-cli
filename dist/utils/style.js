"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warning = exports.success = exports.info = void 0;
var chalk_1 = __importDefault(require("chalk"));
function info(text) {
    return chalk_1.default.blue(text);
}
exports.info = info;
function success(text) {
    return chalk_1.default.green(text);
}
exports.success = success;
function warning(text) {
    return chalk_1.default.yellow(text);
}
exports.warning = warning;
function error(text) {
    return chalk_1.default.red(text);
}
exports.error = error;
