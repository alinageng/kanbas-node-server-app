import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
const allowedOrigins = [process.env.FRONTEND_URL, "https://a5--spontaneous-entremet-bf69b2.netlify.app"];
const app = express();
app.use(
  cors({
    credentials: true,
    origin: allowedOrigins
  })
);
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);