import fs from 'fs-extra';
import path from 'path';
import shellJs from 'shelljs';

import { Constants } from '../shared/constants';

const buildLambdaDist = (): void => {
  const distPath = './dist/src/lambdas';
  const packageJsonPath = './package.json';

  if (fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  const lambdaDirPath = Constants.LAMBDA_DIR_PATH;
  const lambdas = fs
    .readdirSync(Constants.LAMBDA_DIR_PATH)
    .map(dir => ({ name: dir, path: path.resolve(lambdaDirPath, dir) }));

  for (const lambda of lambdas) {
    console.log(`Building '${lambda}' code`);
    const targetDir = path.join(distPath, lambda.name);
    const packageJsonTargetDir = path.join(targetDir, 'package.json');

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }

    fs.copyFileSync(packageJsonPath, packageJsonTargetDir);

    shellJs.exec(`cd ${targetDir} && npm install --production --ignore-scripts`);
  }
};

buildLambdaDist();
