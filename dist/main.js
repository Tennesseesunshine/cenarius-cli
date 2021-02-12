"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var stepStart_1 = __importDefault(require("./utils/stepStart"));
exports.default = (function (config) {
    commander_1.default.command('init').description('初始化选择！');
    // .action(async function (appId) {
    //   // 先校验appid是否存在
    //   if (!appId) {
    //     log.logError('未填写应用名称id');
    //     process.exit(1);
    //   }
    //   // 校验文件目录是否存在
    //   if (checkApp(appId)) {
    //     log.logError('应用名称不合法或者重复，请重新试试');
    //     process.exit(0);
    //   }
    // });
    // program
    //   .command('create <appId>')
    //   .description('创建一个应用！')
    //   .option('--app-name <appName>', '请完善您的应用名称')
    //   .action(async function (appId) {
    //     // 先校验appid是否存在
    //     if (!appId) {
    //       log.logError('未填写应用名称id');
    //       process.exit(1);
    //     }
    //     // 校验文件目录是否存在
    //     if (checkApp(appId)) {
    //       log.logError('应用名称不合法或者重复，请重新试试');
    //       process.exit(0);
    //     }
    //   });
    commander_1.default.parse(process.argv);
    stepStart_1.default({});
});
