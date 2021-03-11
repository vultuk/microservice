import {NextFunction, Request, Response} from 'express';

export type Route = {
  method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'options';
  path: string;
  fn: (req?: Request, res?: Response, next?: NextFunction) => Promise<void>;
};
