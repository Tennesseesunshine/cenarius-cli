import ora from 'ora';
import { logSuccess } from './printLog';
import { success } from './logSymbol';
import cloneGit from './cloneGit';
interface CreateAppOptions {
  appId: string;
  appName: string;
}
export default async function createAppFromGit(options: CreateAppOptions) {
  const appId = options.appId;
  const appName = options.appName;

  const spinnerClone = ora('正在下载项目模板...');
  try {
    spinnerClone.start();
    await cloneGit({ appId, appName });

    logSuccess(`${success()} 下载模版成功！`);
  } catch (error) {
  } finally {
    spinnerClone.stop();
  }
}
