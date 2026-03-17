import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import courseRouter from "./routes/courseRoute.js";

const app = express();

// DB Connections
await connectDB();
await connectCloudinary();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Public Routes
app.get("/", (req, res) => res.send("API Working"));

// Webhooks (raw/json before auth)
app.post("/clerk", express.json(), clerkWebhooks);
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Clerk Auth Middleware
app.use(clerkMiddleware());

// Protected Routes
app.use("/api/educator", educatorRouter);
app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);

// Server Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});