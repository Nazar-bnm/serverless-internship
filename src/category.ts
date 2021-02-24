import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import categories from "../mocks/categories";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const category =
    event.pathParameters && event.pathParameters['category-id']
      ? categories[event.pathParameters['category-id']]
      : null;
  return category
    ? {
        statusCode: 200,
        body: JSON.stringify(category),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
