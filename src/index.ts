import chalk from 'chalk';
import dotenv from 'dotenv';
import express from 'express';
import figlet from 'figlet';
import pino from 'express-pino-logger';
import console from './utils/console.js';
import email from './email/index.js';

dotenv.config();

console.log(
  chalk.bold.magentaBright(
    figlet.textSync('Utils Server', {
      font: 'Cosmike',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  ),
);

const app = express();
app.use(express.json());
// app.use(pino.default());
app.use(email);
app.listen(process.env.SERVER_PORT);
