#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import jsYaml from 'js-yaml';
import get from '../formatters/index.js';

const parse = (filepath) => {
  const resolvedFilepath = path.resolve(process.cwd(), filepath);
  const doc = fs.readFileSync(resolvedFilepath, 'utf8');
  switch (path.extname(filepath)) {
    case '.yml':
      return jsYaml.load(doc);
    case '.yaml':
      return jsYaml.load(doc);
    case '.json':
      return JSON.parse(doc);
    default:
      return JSON.parse(doc);
  }
};

const getDiff = (filepath1, filepath2, format) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);
  return get(obj1, obj2, format);
};

export default getDiff;
