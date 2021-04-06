import * as cdk from '@aws-cdk/core';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloFunc = new NodejsFunction(this, 'Hello', {
      entry: 'lambda/hello/index.ts',
      runtime: Runtime.NODEJS_12_X,
    });
  }
}
