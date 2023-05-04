import express, { Express, Router } from 'express';
import { Config } from './config';
import { tryConnectDB } from './services/db';

// Controllers
import { alertRouter } from './routers/alertsRouter';
import { config } from 'dotenv';

const app: Express = express();
const port = Config.PORT;

tryConnectDB();

// Default
app.use(express.json());


app.use("/alerts", alertRouter);

app.use('/*', (req, res) => res.status(404).json({ success: false, message: '404 Not Found' }));

if(Config.NODE_ENV !== 'test'){
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}