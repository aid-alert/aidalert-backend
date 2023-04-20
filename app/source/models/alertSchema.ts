import { Schema, model, connect } from 'mongoose';

/*
{
    "user-id": "uuid-4",
    "datetime": "YYYY-MM-DD",
    "location": "GPS-Location",
    "hash": "hash-check"

}
*/

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

const Alert = model<Alert>('Alert', alertSchema);

run().catch(err => console.log(err));

async function run() {

    const testAlert = new Alert({
        name: 'Bill',
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await testAlert.save();

    console.log(alert.name); // 'bill@initech.com'
}