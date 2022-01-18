import _ from 'lodash';
import getDiffTree from './getDiffTree.js';

const getDiffStylish = (obj1, obj2) => {
  const result1 = getDiffTree(obj1, obj2);
  const result2 = JSON.stringify(result1, null, 4);
  const result3 = result2.replace(/ ""/g, '');
  const result4 = result3.replace(/,\s/g, '\n');
  const result5 = result4.replace(/"/g, '');
  const result6 = result5.replace(/\s\s\+/g, '+');
  const result7 = result6.replace(/\s\s-/g, '-');
  const result8 = result7.replace(/:\n/g, ': \n');
  return result8;
};

export default getDiffStylish;
