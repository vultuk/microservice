import { NextFunction, Request, Response } from 'express';

export type Route = {
  method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'options';
  path: string;
  fn:
    | (() => Promise<void>)
    | ((req: Request) => Promise<void>)
    | ((req: Request, res: Response) => Promise<void>)
    | ((req: Request, res: Response, next: NextFunction) => Promise<void>);
};
