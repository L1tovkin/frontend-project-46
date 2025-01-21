import { extname, resolve } from 'path';
import { cwd } from 'process';
import { readFileSync } from 'fs';
import parsers from './parsers.js';

const genDiff = (path1, path2, formatName) => {
	const file1 = readFileSync(resolve(cwd(), path1));
	const file2 = readFileSync(resolve(cwd(), path2));
	const extFile1 = extname(path1).slice(1);
	const extFile2 = extname(path2).slice(1);
	const dataFile1 = parsers(file1, extFile1);
	const dataFile2 = parsers(file2, extFile2);
	console.log(dataFile1, dataFile2)

	return [dataFile1, dataFile2];
};

export default genDiff;
