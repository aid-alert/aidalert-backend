import { Router } from "express";
import express from "express";
import { alertGet } from "../controllers/alertController";

export const alertRouter: Router = express.Router();

alertRouter.get("/", alertGet);