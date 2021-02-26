import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import subCategories, { Product } from "../mocks/mockedSubCategories";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  let subCategoryData;

  if (event.pathParameters && event.pathParameters.id) {
    const subCategory = subCategories[event.pathParameters.id];
    const products: Product[] = subCategory.products;
    const queryParameters = event.queryStringParameters;
    const { skip = 0, limit = 0 } = queryParameters || {};

    if (queryParameters) {
      skip > 0 && products.splice(0, Number(skip));
      limit > 0 && products.splice(Number(limit));

      subCategory.products = products;
    }

    subCategoryData = subCategory;
  } else {
    subCategoryData = Object.values(subCategories).map(({ id, name }) => ({ id, name }));
  }

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
