import { Request, Response, NextFunction } from 'express';
import {Alert} from '../models/alertSchema';

export const alertGet = async (req: Request, res: Response, next: NextFunction) => {

    const allAlerts = await Alert.find({}).exec();

    res.status(200)
    // if(allAlerts.length == 0 )
    //     res.json({"status": "200 ok", "body": "No Alert to see"});
    // else
    // more
        res.json(
        {
            "status": "200 ok", 
            "body": allAlerts
        });
} 

export const alertPost = async (req: Request, res: Response, next: NextFunction) => {
    // console.log("Alert POST body: ", req.body);

    const newAlert = new Alert({
        user_id: req.body["user-id"],
        datetime: req.body["datetime"],
        location: req.body["location"],
        hash: req.body["hash"]
    });

    const query_res = await newAlert.save();

    console.log(query_res);

    res.status(200).json({"status": "200 ok", "message": "all saved"});
}