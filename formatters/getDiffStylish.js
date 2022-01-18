import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2)).sort();
  const result = {};
  keys.forEach((key) => {
    const findKey1 = _.find(_.entries(obj1), ([key1]) => key === key1);
    const findKey2 = _.find(_.entries(obj2), ([key2]) => key === key2);
    const [, value1] = findKey1 ?? '';
    const [, value2] = findKey2 ?? '';
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

const getDiffStylish = (obj1, obj2) => {
  const result1 = getDiff(obj1, obj2);
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
