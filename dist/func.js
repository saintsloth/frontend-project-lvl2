#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fs = _interopRequireWildcard(require("fs"));

var _lodash = _interopRequireDefault(require("lodash"));

var path = _interopRequireWildcard(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const gendiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);
  const json1 = JSON.parse(fs.readFileSync(path1, 'utf8'));
  const json2 = JSON.parse(fs.readFileSync(path2, 'utf8'));

  const json1Entries = _lodash.default.entries(json1);

  const json2Entries = _lodash.default.entries(json2);

  const keys = _lodash.default.union(_lodash.default.keys(json1), _lodash.default.keys(json2)).sort();

  let print = {};
  keys.forEach(key => {
    const findKey1 = _lodash.default.find(json1Entries, ([key1]) => key === key1);

    const findKey2 = _lodash.default.find(json2Entries, ([key2]) => key === key2);

    let value1 = '';
    let value2 = '';
    if (findKey1) [, value1] = findKey1;
    if (findKey2) [, value2] = findKey2;

    if (value1 === value2) {
      print[`  ${key}`] = value1;
    } else {
      if (findKey1) print[`- ${key}`] = value1;
      if (findKey2) print[`+ ${key}`] = value2;
    }
  });
  print = JSON.stringify(print, null, 2);
  return print.replace(/"/g, '');
};

var _default = gendiff;
exports.default = _default;
//# sourceMappingURL=getDiff.js.map
