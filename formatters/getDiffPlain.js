import _ from 'lodash';

const getDiffPlain = (obj1, obj2, start = '') => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
  let result = '';
  keys.forEach((key) => {
    const findKey1 = _.find(_.entries(obj1), ([key1]) => key === key1);
    const findKey2 = _.find(_.entries(obj2), ([key2]) => key === key2);
    const [, value1] = findKey1 ?? '';
    const [, value2] = findKey2 ?? '';
    if (_.isObject(value1) && _.isObject(value2)) {
      result += getDiffPlain(value1, value2, `${start}${key}.`);
    } else {
      if (value1 !== value2) {
        const formatFunc = (value) => {
          if (_.isObject(value)) {
            return '[complex value]';
          }
          return _.isString(value) ? `'${value}'` : value;
        };
        const prObjVal1 = formatFunc(value1);
        const prObjVal2 = formatFunc(value2);
        if (findKey1 && findKey2) {
          result += `Property '${start}${key}' was updated. From ${prObjVal1} to ${prObjVal2}\n`;
        } else {
          if (findKey1) result += `Property '${start}${key}' was removed\n`;
          if (findKey2) result += `Property '${start}${key}' was added with value: ${prObjVal2}\n`;
        }
      }
    }
  });
  return result;
};

export default getDiffPlain;
