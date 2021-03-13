import { NextFunction, Request, Response } from 'express';

export default (callback: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => callback(req, res, next).catch(next);
