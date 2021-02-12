import chalk from 'chalk';

const info = () => chalk.blue('ℹ');
const success = () => chalk.green('✔');
const warning = () => chalk.yellow('⚠');
const error = () => chalk.red('✖');

export { info, success, warning, error };
