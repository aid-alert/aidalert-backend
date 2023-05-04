import { connect } from "mongoose";

// const connString = Config.DATABASE_URI_TYPE + "://" + Config.DATABASE_URL + ":" + Config.DATABASE_PORT + "/" + Config.DATABASE_NAME;
const connString = "mongodb://mongo:27017/alerts";

console.log(`[server] The default connection is with the URI: ${connString}`);

export const tryConnectDB = async () => {
    console.log("[server] Try to connect to DB");
    await connect(connString)
        .catch(error => console.log(`[server] Database connection errors: ${error}`))
        .then(() => console.log("[server] Default connection established"));
  }
