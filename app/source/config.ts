import dotenv from 'dotenv';
import { exit } from 'process';

dotenv.config();

type Log_Level = 
| "errors"
| "essential"
| "complete"
| "all"


export interface Configuration {
    // Generics
    PORT: string;
    ENVIRONMENT: string;

    LOG_MODE: Log_Level;
    LOG_FILE: string;
    
    // Database
    DATABASE_URI_TYPE: string;
    DATABASE_URL: string;

    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    DATABASE_PORT: string;
    DATABASE_TIMEOUT: number;
    
    //     var PORT: string = process.env.PORT || "8080";
    //     ENVIRONMENT: process.env.ENV || "development";

    //     // Database
    //     DATABASE_URL: process.env.DATABASE_URL as unknown || "mongo";
    //     DATABASE_URI: `mongodb://${Config.DATABASE_URL}/test`;
}

// check for the database password is set.
if (process.env.DATABASE_PASSWORD == undefined) {
    console.log("[SETUP] Please setup database user password")
    exit(100);
}

var logMode: Log_Level; // default: LOG_MODE: All
if(process.env.LOG_MODE == "errors") {
    logMode = "errors";
} else if (process.env.LOG_MODE == "essential") {
    logMode = "essential";
} else if (process.env.LOG_MODE == "complete") {
    logMode = "essential"
} else {
    logMode = "all";
}

export const Config: Configuration = {
    // Generics
    PORT: process.env.PORT || "8080",
    ENVIRONMENT: process.env.ENV || "dev",

    LOG_MODE: logMode,
    LOG_FILE: process.env.LOG_FILE!,

    // Database
    DATABASE_URL: process.env.DATABASE_URL || "mongo",
    DATABASE_URI_TYPE: process.env.DATABASE_URI_TYPE || "mongodb",

    DATABASE_USER: process.env.DATABASE_USER || "mongo",
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD!,
    DATABASE_NAME: process.env.DATABASE_NAME || "alerts",
    DATABASE_PORT: process.env.DATABASE_PORT || "27017",
    DATABASE_TIMEOUT: Number(process.env.DATABASE_TIMEOUT) || 60000

};
