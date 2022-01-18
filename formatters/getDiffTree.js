import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  const loop = ([key, ...tail], acc = {}) => {
    if (key === undefined) return acc;
    const findKey1 = _.find(_.entries(obj1), ([key1]) => key === key1);
    const findKey2 = _.find(_.entries(obj2), ([key2]) => key === key2);
    const [, value1] = findKey1 ?? '';
    const [, value2] = findKey2 ?? '';
    if (_.isObject(value1) && _.isObject(value2)) {
      return loop(tail, _.set(acc, key, getDiffTree(value1, value2)));
    }
    if (value1 === value2) {
      return loop(tail, _.set(acc, key, value1));
    }
    if (findKey1 && findKey2) {
      return loop(tail, _.set(_.set(acc, `- ${key}`, value1), `+ ${key}`, value2));
    }
    if (findKey1) {
      return loop(tail, _.set(acc, `- ${key}`, value1));
    }
    if (findKey2) {
      return loop(tail, _.set(acc, `+ ${key}`, value2));
    }
    return 'never';
  };

  return loop(keys);
};

export default getDiffTree;
