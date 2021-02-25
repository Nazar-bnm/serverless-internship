import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import subCategories from "../mocks/mockedSubCategories";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const subCategoryData =
    event.pathParameters && event.pathParameters.id
      ? subCategories[event.pathParameters.id]
      : Object.values(subCategories).map(({ id, name }) => ({ id, name }));
  return subCategoryData
    ? {
        statusCode: 200,
        body: JSON.stringify(subCategoryData),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
}
