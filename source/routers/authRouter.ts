import { Router } from "express";
import express from "express";
import { login } from "../controllers/userController";

export const authRouter: Router = express.Router();

// // Get personal information
// authRouter.get("/me", getMeInfo);

// // Do Login
// authRouter.post("/login", postLogin);

// authRouter.post("/register", postRegister);

// authRouter.post("/logout", postLogout);
