"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warning = exports.success = exports.info = void 0;
var chalk_1 = __importDefault(require("chalk"));
var info = function () { return chalk_1.default.blue('ℹ'); };
exports.info = info;
var success = function () { return chalk_1.default.green('✔'); };
exports.success = success;
var warning = function () { return chalk_1.default.yellow('⚠'); };
exports.warning = warning;
var error = function () { return chalk_1.default.red('✖'); };
exports.error = error;
