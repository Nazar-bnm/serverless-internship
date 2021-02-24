import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import mostPopularProducts from "../mocks/mostPopularProducts";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify(mostPopularProducts),
  }
}
