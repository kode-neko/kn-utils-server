import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { rateLimit, RateLimitRequestHandler } from 'express-rate-limit';
import helmet from 'helmet';

import { createAnimalList } from './animal/Factory';
import animal from './animal/index';
import email from './email/index';
import console from './utils/console';

dotenv.config();

createAnimalList();

const app: Express = express();

// Config
app.use(express.json());
app.use(helmet());
app.use(cors());
const limiter: RateLimitRequestHandler = rateLimit({
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  windowMs: 15 * 60 * 1000 // 15 minutes
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// routes
app.use(
  '/contact',
  email
);
app.use(
  '/animal',
  animal
);

// init server
app.listen(
  process.env.SERVER_PORT,
  () => {
    console.log(`\n 🚀  Server on port ${process.env.SERVER_PORT}`);
  }
);
