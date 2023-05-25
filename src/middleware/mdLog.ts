import { NextFunction, Request, Response } from "express";

function mdLog(req: Request, res: Response, next: NextFunction) {
  console.log(`📩  Received a ${req.method} request for ${req.url}`);
  console.log(`🫡  Headers ${JSON.stringify(req.headers, null, "  ")}`);
  console.log('\n')
  next();
}

export default mdLog;