import dotenv from 'dotenv';
import express, {Express} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit, RateLimitRequestHandler } from 'express-rate-limit';
import console from './utils/console';
import email from './email/index';
import animal from './animal/index';
import { createAnimalList } from './animal/Factory';

dotenv.config();

const {
  SERVER_PORT
} = process.env;

createAnimalList();

const app: Express = express();

// Config
app.use(express.json());
app.use(helmet());
app.use(cors({origin: ["http://www.kodeneko.com", "https://www.kodeneko.com", `localhost:${SERVER_PORT}`]}));
const limiter: RateLimitRequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// routes
app.use('/contact', email);
app.use('/animal', animal);

// init server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`\n 🚀  Server on port ${process.env.SERVER_PORT}`);
});
