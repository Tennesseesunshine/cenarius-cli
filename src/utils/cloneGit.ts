import path from 'path';
import shell from 'shelljs';
import checkApp from './checkApp';
import { logError } from './printLog';
import { error } from './logSymbol';

interface CloneGitProps {
  appId: string;
  appName: string;
}

export default function cloneGit(options: CloneGitProps) {
  const appName = options.appName;
  const appId = options.appId;
  const gitAddress = `https://github.com/Tennesseesunshine/express-umi-project-skeleton.git`;
  const initPath = path.join(process.cwd(), './app');
  if (checkApp(appId)) {
    logError(`${error()} 文件存在 请重新生成`);
    process.exit(1);
  }
  shell.cd(initPath);
  shell.mkdir(appId);
  shell.exec(`git clone ${gitAddress} ${appId}`);
}
