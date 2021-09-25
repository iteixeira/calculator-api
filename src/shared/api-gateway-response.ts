export interface APIGatewayResponse {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
}
