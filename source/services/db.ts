import { connect } from "mongoose";
import { Config } from "../config";

const connString = Config.DATABASE_URL;

console.log(`[server] The default connection is with the URI: ${connString}`);

export const tryConnectDB = async () => {
    console.log("[server] Try to connect to DB");
    await connect(connString)
        .catch(error => console.log(`[server] Database connection errors: ${error}`))
        .then(() => console.log("[server] Default connection established"));
  }
