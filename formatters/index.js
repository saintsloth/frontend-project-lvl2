import { getDiffPlain } from './getDiffPlain.js';
import { getDiffStylish } from './getDiffStylish.js';
import { getDiffJson } from './getDiffJson.js';

export default (obj1, obj2, format) => {
  switch (format) {
    case 'plain':
      return getDiffPlain(obj1, obj2);
    case 'json':
      return getDiffJson(obj1, obj2);
    default:
      return getDiffStylish(obj1, obj2);
  }
};
