"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var shelljs_1 = __importDefault(require("shelljs"));
var checkApp_1 = __importDefault(require("./checkApp"));
var printLog_1 = require("./printLog");
var logSymbol_1 = require("./logSymbol");
function cloneGit(options) {
    var appName = options.appName;
    var appId = options.appId;
    var gitAddress = "https://github.com/Tennesseesunshine/express-umi-project-skeleton.git";
    var initPath = path_1.default.join(process.cwd(), './app');
    if (checkApp_1.default(appId)) {
        printLog_1.logError(logSymbol_1.error() + " \u6587\u4EF6\u5B58\u5728 \u8BF7\u91CD\u65B0\u751F\u6210");
        process.exit(1);
    }
    shelljs_1.default.cd(initPath);
    shelljs_1.default.mkdir(appId);
    shelljs_1.default.exec("git clone " + gitAddress + " " + appId);
}
exports.default = cloneGit;
