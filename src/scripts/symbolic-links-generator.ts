import fs from 'fs';
import path from 'path';
import shellJs from 'shelljs';

import { Constants } from '../shared/constants';

const generateSymbolicLinks = () => {
  const lambdaDirPath = Constants.LAMBDA_DIR_PATH;
  const lambdaPaths = fs.readdirSync(lambdaDirPath).map(dir => path.resolve(lambdaDirPath, dir));
  const target = path.resolve(__dirname, '../shared');

  for (const lambdaPath of lambdaPaths) {
    shellJs.exec(`ln -sf ${target} ${lambdaPath}`);
  }

  console.log(`Symbolic Links '${target}' generated successfully!`);
};

generateSymbolicLinks();
