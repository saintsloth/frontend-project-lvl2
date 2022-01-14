#!/usr/bin/env node

import { program } from 'commander';
import gendiff from "../dist/func.js";

program
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2))
  });

program.parse(process.argv);
const options = program.opts();
if (options.version) console.log('version 1.0.0');
if (options.format) console.log(`${options.format}`);
