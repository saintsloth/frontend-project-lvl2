// @ts-check

import * as fs from 'fs';
import gendiff from '../src/func';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendiff-test', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json')
  const result = gendiff(filepath1, filepath2);
  const expectedResult = fs.readFileSync('/home/duck/WebstormProjects/frontend-project-lvl2/__fixtures__/expectedResult', 'utf8');

  expect(result).toEqual(expectedResult);
});
