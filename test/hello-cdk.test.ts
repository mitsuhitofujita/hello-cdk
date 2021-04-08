import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HelloCdk from '../lib/hello-cdk-stack';

test('Have Lambda resource.', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HelloCdk.HelloCdkStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::Lambda::Function"));
});
