import { Request, Response, NextFunction } from 'express';
import { User } from '../models/userSchema';

export const login = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const newUser = new User({
        privilege: false,
        verification: false,
        user_id: req.body["user-id"],
    });

    newUser.save();

    res.status(200).json({
        "status": "200 ok",
        "message": "User Successfully created"
    })
}