import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import products from "../mocks/mockedProducts";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const productData =
    event.pathParameters && event.pathParameters.id
      ? products[event.pathParameters.id]
      : null;
  return productData
    ? {
        statusCode: 200,
        body: JSON.stringify(productData),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
