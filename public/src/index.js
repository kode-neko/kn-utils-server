import chalk from 'chalk';
import dotenv from 'dotenv';
import express from 'express';
import figlet from 'figlet';
import pino from 'express-pino-logger';
import console from './utils/console.js';
dotenv.config();
console.log(chalk.bold.magentaBright(figlet.textSync('Utils Server', {
    font: 'Cosmike',
    horizontalLayout: 'default',
    verticalLayout: 'default',
})));
const app = express();
app.use(pino.default());
app.listen(process.env.SERVER_PORT);
//# sourceMappingURL=index.js.map