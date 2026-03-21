import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

async function seedProducts() {
  console.log("Fetching products from Fake Store API...");

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  console.log(`Got ${products.length} products. Seeding to DynamoDB...`);

  for (const product of products) {
    const command = new PutItemCommand({
      TableName: "Products",
      Item: {
        productId: { S: String(product.id) },
        title: { S: product.title },
        price: { N: String(product.price) },
        description: { S: product.description },
        category: { S: product.category },
        image: { S: product.image },
        rating: { N: String(product.rating.rate) },
        ratingCount: { N: String(product.rating.count) },
      },
    });

    await client.send(command);
    console.log(`✅ Added product ${product.id}: ${product.title}`);
  }

  console.log("🎉 All products seeded successfully!");
}

seedProducts();
