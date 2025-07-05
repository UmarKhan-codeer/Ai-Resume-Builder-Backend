import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: [
    "https://ai-resume-builder-nine-pi.vercel.app",
    "https://ai-resume-builder-git-main-umarkhan-codeers-projects.vercel.app",
    "https://ai-resume-builder-njx7b4wlu-umarkhan-codeers-projects.vercel.app"
  ],
  credentials: true
};
app.use(cors(corsOptions));

// ✅ Fix the base path
app.use("/api/auth", userRouter); // ← was /api/users
app.use("/api/resumes", resumeRouter);

// ✅ Optional but recommended root route
app.get("/", (req, res) => {
  res.send("Backend API is Live ✅");
});

export default app;
