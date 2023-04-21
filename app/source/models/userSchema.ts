import { Schema, model } from 'mongoose';

type UserPrivilege = 
| "admin"
| "authorized"

interface User {
    user_id: string,
    verification: boolean,
    privilege: UserPrivilege
}

const userSchema = new Schema<User>({
   user_id: {type: String, required: true},
   verification: {type: Boolean, required: true},
   privilege: {type: String, required: true}
});

export const User = model<User>('User', userSchema);