import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleConsultation } from "./routes/consultation";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Production API routes
  app.post("/api/consultation", handleConsultation);

  return app;
}
