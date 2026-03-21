import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event) => {
  try {
    const command = new ScanCommand({
      TableName: "Products",
    });

    const response = await client.send(command);
    const products = response.Items.map((item) => {
      const product = unmarshall(item);

      // Match Fake Store API structure exactly
      return {
        id: Number(product.productId),
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
          rate: product.rating,
          count: product.ratingCount,
        },
      };
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
