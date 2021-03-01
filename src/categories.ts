import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import categories from "../mocks/mockedCategories";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const categoryData =
    event.pathParameters && event.pathParameters.id
      ? categories[event.pathParameters.id]
      : Object.values(categories);
  return categoryData
    ? {
        statusCode: 200,
        body: JSON.stringify(categoryData),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
