#!/usr/bin/env node

import * as fs from 'fs';
import _ from 'lodash';
import * as path from 'path';

const gendiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);
  const json1 = JSON.parse(fs.readFileSync(path1, 'utf8'));
  const json2 = JSON.parse(fs.readFileSync(path2, 'utf8'));
  const json1Entries = _.entries(json1);
  const json2Entries = _.entries(json2);

  const keys = _.union(_.keys(json1), _.keys(json2)).sort();
  let print = {};

  keys.forEach((key) => {
    const findKey1 = _.find(json1Entries, ([key1]) => key === key1);
    const findKey2 = _.find(json2Entries, ([key2]) => key === key2);
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
  print = print.replace(/,/g, '');
  print = print.replace(/"/g, '');
  return print;
};

export default gendiff;
