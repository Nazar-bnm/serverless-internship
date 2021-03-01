import { APIGatewayProxyResult } from "aws-lambda";
import mostPopularProducts from "../mocks/mockedMostPopular";

export async function main(): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify(mostPopularProducts),
  }
}
