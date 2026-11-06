# BrandShield AI - Backend

Express 5 + MongoDB (Mongoose) backend with middleware.

## Setup

```bash
cd backend
npm install
cp .env.example .env   # apna MONGODB_URI daalo
npm run dev            # http://localhost:8000
```

## APIs

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | /                     | Health check             |
| GET    | /api/brand            | Latest brand profile     |
| POST   | /api/brand            | Create brand profile     |
| PUT    | /api/brand/:id        | Update brand profile     |
| GET    | /api/dashboard        | Dashboard stats          |
| GET    | /api/scan/social      | Social media scans       |
| GET    | /api/scan/apps        | App store scans          |
| POST   | /api/scan             | Create scan              |
| GET    | /api/threat           | All threats              |
| GET    | /api/threat/:id       | Single threat            |

## Middleware (middleware/)

- `logger.js` - har request log karta hai
- `errorHandler.js` - 404 + global error handling (Mongoose CastError, ValidationError, duplicate key)

## GitHub branch banane ke liye

```bash
# repo clone karo (ya apna existing clone use karo)
git clone https://github.com/khushirajput2616-lang/qwer.git
cd qwer

# nayi branch banao
git checkout -b backend-apis

# backend folder repo root me copy karo (node_modules nahi, .env nahi)
cp -r /path/to/backend ./backend

git add backend/
git commit -m "feat: add BrandShield backend APIs with middleware"
git push -u origin backend-apis
```

Phir GitHub pe jaake **backend-apis** branch se main/master ko **Pull Request** banao aur merge karo.

## Frontend connect karna

Frontend me axios ka baseURL backend URL pe set karo:

```js
import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8000/api" });
// api.get("/threat")  ->  http://localhost:8000/api/threat
```

Ya Vite/React ke `vite.config.js` me proxy:

```js
export default {
  server: { proxy: { "/api": "http://localhost:8000" } }
};
```

> Security note: `.env` kabhi push mat karna — sirf `.env.example` repo me rakho.
