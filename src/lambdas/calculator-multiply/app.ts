import { APIGatewayEvent } from 'aws-lambda';

import { CalculatorInput } from './shared/calculator-input';
import { CalculatorService } from './shared/calculator-service';
import { Constants } from './shared/constants';

import { APIGatewayResponse } from './shared/api-gateway-response';
import { OperatorTypes } from './shared/operator-type';

const handler = async (event: APIGatewayEvent): Promise<APIGatewayResponse> => {
  try {
    const input: CalculatorInput = (event.queryStringParameters as any) || {};

    const service = new CalculatorService();
    const result = service.calc(input, OperatorTypes.MULTIPLY);

    return {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: result }),
      statusCode: Number(Constants.HTTP_OK),
    };
  } catch (error: any) {
    console.error(error);

    const bodyMessage = error.code ? { error: error.message } : { error: 'Something went wrong.' };
    const statusCode = error.code || Constants.HTTP_INTERNAL_SERVER_ERROR;

    return {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyMessage),
      statusCode: statusCode,
    };
  }
};

export { handler };
