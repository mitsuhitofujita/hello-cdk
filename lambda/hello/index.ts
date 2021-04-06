import { APIGatewayProxyEvent, APIGatewayEventRequestContext, APIGatewayProxyResult } from 'aws-lambda';
import * as AWS from 'aws-sdk';

export async function handler(
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
): Promise<APIGatewayProxyResult> {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify("hello world")
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 502, body: JSON.stringify({ message: error }) };
  }
}
