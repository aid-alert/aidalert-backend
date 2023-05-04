import { Schema, model } from 'mongoose';

interface Alert {
    user_id: string;
    datetime: Date;
    location: string;
    hash: string;
}

const alertSchema = new Schema<Alert>({
    user_id: { type: String, required: true },
    datetime: { type: Date, required: true },
    location: { type: String, required: true },
    hash: { type: String, required: true }
});

export const Alert = model<Alert>('Alert', alertSchema);