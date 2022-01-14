// @ts-check

import * as fs from 'fs';
import gendiff from '../src/func';

test('gendiff-test', () => {
  const filepath1 = '/home/duck/WebstormProjects/frontend-project-lvl2/__fixtures__/file1.json';
  const filepath2 = '/home/duck/WebstormProjects/frontend-project-lvl2/__fixtures__/file2.json';
  const result = gendiff(filepath1, filepath2);
  const expectedResult = fs.readFileSync('/home/duck/WebstormProjects/frontend-project-lvl2/__fixtures__/expectedResult', 'utf8');

  expect(result).toEqual(expectedResult);
});
