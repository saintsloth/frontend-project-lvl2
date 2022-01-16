import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2)).sort();
  const result = {};
  keys.forEach((key) => {
    const findKey1 = _.find(_.entries(obj1), ([key1]) => key === key1);
    const findKey2 = _.find(_.entries(obj2), ([key2]) => key === key2);
    let value1 = '';
    let value2 = '';
    if (findKey1) [, value1] = findKey1;
    if (findKey2) [, value2] = findKey2;
    if (_.isObject(value1) && _.isObject(value2)) {
      result[`${key}`] = getDiff(value1, value2);
    } else {
      if (value1 === value2) {
        result[`${key}`] = value1;
      } else {
        if (findKey1) result[`- ${key}`] = value1;
        if (findKey2) result[`+ ${key}`] = value2;
      }
    }
  });
  return result;
};

export const getDiffStylish = (obj1, obj2) => {
  let result = getDiff(obj1, obj2);
  result = JSON.stringify(result, null, 4);
  result = result.replace(/ ""/g, '');
  result = result.replace(/,\s/g, '\n');
  result = result.replace(/"/g, '');
  result = result.replace(/\s\s\+/g, '+');
  result = result.replace(/:\n/g, ': \n');
  result = result.replace(/\s\s-/g, '-');
  return result;
};
