import * as cdk from "@aws-cdk/core";
import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create the HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /product/{id}": "src/product.main",
        "GET /products/categories/{id}": "src/categories.main",
        "GET /products/sub-categories/{id}": "src/subCategories.main",
        "GET /most-popular": "src/mostPopular.main",
      },
    });

    // Show API endpoint in output
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.httpApi.apiEndpoint,
    });
  }
}
