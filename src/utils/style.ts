import chalk from "chalk";

function info(text: string) {
  return chalk.blue(text);
}

function success(text: string) {
  return chalk.green(text);
}

function warning(text: string) {
  return chalk.yellow(text);
}

function error(text: string) {
  return chalk.red(text);
}

export { info, success, warning, error };
