import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import products from "../mocks/products";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const product =
    event.pathParameters && event.pathParameters.id
      ? products[event.pathParameters.id]
      : null;
  return product
    ? {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
