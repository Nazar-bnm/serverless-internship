import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import subCategories from "../mocks/mockedSubCategory";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const subCategory =
    event.pathParameters && event.pathParameters['sub-category-id']
      ? subCategories[event.pathParameters['sub-category-id']]
      : null;
  return subCategory
    ? {
        statusCode: 200,
        body: JSON.stringify(subCategory),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
