import * as style from './style';

function logInfo(text: string) {
  console.log(style.info(text));
}
function logSuccess(text: string) {
  console.log(style.success(text));
}
function logWarning(text: string) {
  console.log(style.warning(text));
}
function logError(text: string) {
  console.log(style.error(text));
}

export { logInfo, logSuccess, logWarning, logError };
