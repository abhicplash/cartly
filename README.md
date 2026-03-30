# 🛒 Cartly — Full Stack E-Commerce App

A production-ready full-stack e-commerce application built with **React.js** and **AWS Cloud Services**.

🌐 **Live Demo:** [https://d3fqcpevmr3vzu.cloudfront.net](https://d3fqcpevmr3vzu.cloudfront.net)

---

## 🚀 Tech Stack

### Frontend
- **React.js** — Component-based UI
- **Redux** — Cart and Wishlist state management
- **React Router** — Client-side routing
- **AWS Amplify** — Cognito authentication integration
- **Vite** — Fast build tool

### AWS Cloud Services
- **S3** — Static website hosting
- **CloudFront** — Global CDN + HTTPS delivery
- **Lambda** — Serverless backend functions
- **API Gateway** — REST API endpoints
- **DynamoDB** — NoSQL database
- **Cognito** — User authentication (signup/login)
- **IAM** — Roles and policies for secure service communication

---

## ✨ Features

- 🛍️ Browse products from AWS DynamoDB
- 🔍 Search and filter products
- ❤️ Add to Wishlist
- 🛒 Add to Cart with quantity management
- 🔐 User authentication (Signup, Login, Email verification)
- 🔒 Protected routes (Cart + Wishlist require login)
- 📱 Fully responsive design
- ⚡ Fast global delivery via CloudFront CDN
- 🌐 HTTPS secured

---

## 🏗️ Architecture

```
User (anywhere in the world)
        ↓
CloudFront CDN (400+ edge locations)
        ↓
S3 Bucket (React app)
        ↓
API Gateway (REST API)
        ↓
Lambda Functions (serverless backend)
        ↓
DynamoDB (Products, Cart, Wishlist, Orders)
        ↓
Cognito (Authentication)
```

---

## 📁 Project Structure

```
cartly/
├── src/
│   ├── Pages/
│   │   ├── Home/
│   │   ├── ProductDetails/
│   │   ├── SingleProduct/
│   │   ├── Cart/
│   │   ├── Wishlist/
│   │   ├── Auth/
│   │   └── NotFound/
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Layout/
│   │   ├── Footer/
│   │   └── ScrollToTop/
│   ├── redux/
│   └── main.jsx
├── lambda-functions/
│   └── getProducts/
│       └── getProducts.mjs
├── bucket-policy.json
├── cloudfront-config.json
├── trust-policy.json
└── seedProducts.mjs
```

---

## 🗄️ DynamoDB Tables

| Table | Partition Key | Sort Key | Purpose |
|-------|--------------|----------|---------|
| Products | productId | - | All products |
| Cart | userId | productId | Cart items per user |
| Wishlist | userId | productId | Wishlist per user |


---

## 🔐 Authentication Flow

```
Signup → Email Verification → Login → JWT Token → Protected Routes
```

- Powered by **AWS Cognito User Pools**
- Protected routes redirect to login if not authenticated

---

## 🚀 Deployment

### Prerequisites
- AWS CLI configured
- Node.js 20+

### Deploy Frontend
```bash
npm run build
aws s3 sync dist/ s3://cartly-ecom-app --delete
aws cloudfront create-invalidation --distribution-id E21Z7XDMLCBD69 --paths "/*"
```

### Deploy Lambda
```bash
cd lambda-functions/getProducts
Compress-Archive -Path * -DestinationPath ../getProducts.zip -Force
cd ..
aws lambda update-function-code --function-name getProducts --zip-file fileb://getProducts.zip
```

### Seed Database
```bash
node seedProducts.mjs
```

---

## 🌐 Live URLs

| Service | URL |
|---------|-----|
| Frontend | https://d3fqcpevmr3vzu.cloudfront.net |
| API | https://qmp29i6f33.execute-api.us-east-1.amazonaws.com/prod/products |

---

## 📸 Screenshots

### Home Page
> Premium shopping experience with modern minimal design

### Products Page
> Browse all products with search functionality

### Cart & Wishlist
> Manage your cart and wishlist (login required)

### Auth Page
> Clean signup/login with email verification

---

## 🎯 AWS Concepts Demonstrated

- ✅ S3 static website hosting with bucket policies
- ✅ CloudFront CDN with HTTPS and cache invalidation
- ✅ Lambda serverless functions with Node.js 20
- ✅ API Gateway REST API with AWS_PROXY integration
- ✅ DynamoDB NoSQL with partition keys and sort keys
- ✅ IAM roles and policies (principle of least privilege)
- ✅ Cognito User Pools  
- ✅ AWS CLI for all deployments

---

## 👨‍💻 Author

**Abhilash C P**
- GitHub: [@abhicplash](https://github.com/abhicplash)
- LinkedIn: [linkedin.com/in/abhilashcp](https://linkedin.com/in/abhilashcp)

---

## 📄 License

MIT License — feel free to use this project as reference!