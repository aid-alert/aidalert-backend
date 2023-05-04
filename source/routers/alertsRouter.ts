import { Router } from "express";
import express from "express";
import { alertGet, alertPost } from "../controllers/alertController";

export const alertRouter: Router = express.Router();

alertRouter.get("/", alertGet);
alertRouter.post("/", alertPost);