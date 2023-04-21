import { Request, Response, NextFunction } from 'express';
import {Alert} from '../models/alertSchema';

export const alertGet = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"status": "200 ok", "message": "No Alert to see"});
} 

export const alertPost = async (req: Request, res: Response, next: NextFunction) => {
    // console.log("Alert POST body: ", req.body);

    const newAlert = new Alert({
        user_id: req.body["user-id"],
        datetime: req.body["datetime"],
        location: req.body["location"],
        hash: req.body["hash"]
    })

    await newAlert.save();

    res.status(200).json({"status": "200 ok", "message": "all saved"});
}