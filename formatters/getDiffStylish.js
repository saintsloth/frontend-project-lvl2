import { getDiffTree } from './getDiffTree.js';

export const getDiffStylish = (obj1, obj2) => {
  let result = getDiffTree(obj1, obj2);
  result = JSON.stringify(result, null, 2);
  result = result.replace(/ ""/g, '');
  result = result.replace(/,\s/g, '\n');
  result = result.replace(/"/g, '');
  return result;
};
