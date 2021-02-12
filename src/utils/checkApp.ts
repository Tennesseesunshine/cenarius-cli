import path from 'path';
import isPathExist from './isPathExist';

export default (appId: string): boolean => {
  if (isPathExist(path.join(process.cwd(), '/app', appId))) {
    return true;
  }
  return false;
};
