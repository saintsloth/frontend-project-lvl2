#!/usr/bin/env node

import { program } from 'commander';
import getDiff from "../src/getDiff.js";

program
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const format = program.opts().format;
    console.log(getDiff(filepath1, filepath2, format))
  });

program.parse(process.argv);
const options = program.opts();
if (options.version) console.log('version 1.0.0');

export default getDiff;


