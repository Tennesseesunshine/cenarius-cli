import inquirer from 'inquirer';
import { logInfo } from './printLog';
import { info } from './logSymbol';
import checkApp from './checkApp';
import createAppFromGit from './createAppFromGit';

interface InquirerAnswers {
  template?: string;
}
/**
 * 初始化init命令的一些询问参数列表
 */
const getInitCommandQuestions = () => [
  {
    type: 'list',
    name: 'command',
    message: '请选择需要执行的操作',
    choices: [
      {
        name: '创建新的应用',
        value: 'create',
      },
      {
        name: '启动已有应用',
        value: 'start',
      },
      {
        name: '打包现有应用',
        value: 'build',
      },
      {
        name: '退出',
        value: 'exit',
      },
    ],
    filter: (val: string) => val.toLowerCase(),
  },
];

/**
 * 创建应用的时候一些需要询问的参数
 */
const getAppCreateInfoQuestions = () => [
  {
    type: 'input',
    name: 'appId',
    message: '请输入需要创建的App名称（英文）',
    validate: (value: string) => {
      if (value.trim() !== '' && !checkApp(value)) {
        return true;
      }

      return 'App名称不合法或者重复，请更换！';
    },
  },
  {
    type: 'input',
    name: 'appName',
    message: '请输入应用的中文名称',
    validate: (value: string) => {
      if (value.trim() !== '') {
        return true;
      }
      return '应用名称不能为空';
    },
  },
  {
    type: 'confirm',
    name: 'install',
    message: '是否安装依赖',
    default: true,
  },
];

/**
 * 获取需要启动的项目名称(appId)
 */
const getAppidQuestions = () => [
  {
    type: 'input',
    name: 'appId',
    message: '请输入应用ID',
    validate: (value: string) => {
      if (value.trim() !== '') {
        return true;
      }

      return '应用ID不能为空';
    },
  },
];

// 开始创建函数
async function handleCreateCommand(options: any) {
  console.log('options', options);
  const appInfoAns = await inquirer.prompt(getAppCreateInfoQuestions());
  // let tplAns: InquirerAnswers = {};
  console.log('appInfoAns', appInfoAns);
  createAppFromGit({ appId: appInfoAns.appId, appName: appInfoAns.appName });
}

// 启动应用
async function handleStartCommand() {
  const appIdAns = await inquirer.prompt(getAppidQuestions());
  return { ...appIdAns, command: 'start' };
}

// 打包应用
async function handleBuildCommand() {
  const appIdAns = await inquirer.prompt(getAppidQuestions());
  return { ...appIdAns, command: 'build' };
}

function handleExit() {
  logInfo(`${info()} 随时按【Ctrl + C】退出`);
  process.exit(0);
}

function catchCommandHandler(options: any, command: string) {
  const commandMap: {
    [K: string]: () => void;
  } = {
    create: () => handleCreateCommand(options),
    start: () => handleStartCommand(),
    build: () => handleBuildCommand(),
    exit: () => handleExit(),
  };
  return commandMap[command]();
}

async function stepStart(options: any) {
  const commandAns = await inquirer.prompt(getInitCommandQuestions());
  const { command } = commandAns;
  catchCommandHandler(options, command);
  // switch (command) {
  //   case 'create':
  //     return handleCreateCommand(options);
  //   case 'start':
  //     return handleStartCommand();
  //   case 'build':
  //     return handleBuildCommand();
  //   case 'exit':
  //     logInfo('Tips: 随时按【Ctrl + C】退出');
  //     process.exit(0);
  //   default:
  //     process.exit(0);
  // }
}

export default stepStart;
