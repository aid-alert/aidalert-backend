import { Request, Response, NextFunction } from 'express';

export const alertGet = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({"status": "200 ok", "message": "No Alert to see"});
} 