import { getDiffTree } from './getDiffTree.js';

export const getDiffJson = (obj1, obj2) => {
  const result = getDiffTree(obj1, obj2);
  return JSON.stringify(result, null, 2);
};
