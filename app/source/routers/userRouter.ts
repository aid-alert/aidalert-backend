import { Router } from "express";
import express from "express";
import { login } from "../controllers/userController";

export const alertRouter: Router = express.Router();

alertRouter.get("/login", login);
