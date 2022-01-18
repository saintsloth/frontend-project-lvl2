// @ts-check

import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import getDiff from '../src/getDiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendiff-test-stylish', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.yml');
  const result = getDiff(filepath1, filepath2);
  const expectedResult = fs.readFileSync(getFixturePath('exResStylish'), 'utf8');

  expect(result).toEqual(expectedResult);
});

test('gendiff-test-stylish-recurse', () => {
  const filepath1 = getFixturePath('file3-rec.json');
  const filepath2 = getFixturePath('file4-rec.json');
  const result = getDiff(filepath1, filepath2);
  const expectedResult = fs.readFileSync(getFixturePath('exResStylish-rec'), 'utf8');

  expect(result).toEqual(expectedResult);
});

test('gendiff-test-json', () => {
  const filepath1 = getFixturePath('file3-rec.json');
  const filepath2 = getFixturePath('file4-rec.json');
  const result = getDiff(filepath1, filepath2, 'json');
  const expectedResult = fs.readFileSync(getFixturePath('exResJson'), 'utf8');

  expect(result).toEqual(expectedResult);
});

test('gendiff-test-plain-rec', () => {
  const filepath1 = getFixturePath('file3-rec.json');
  const filepath2 = getFixturePath('file4-rec.json');
  const result = getDiff(filepath1, filepath2, 'plain');
  const expectedResult = fs.readFileSync(getFixturePath('exResPlain-rec'), 'utf8');

  expect(result).toEqual(expectedResult);
});
