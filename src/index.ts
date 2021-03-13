import ErrorHandling from './Server/ErrorHandling';
import Middleware from './Server/Middleware';
import Routes from './Server/Routes';
import Serve from './Server/Serve';
import Setup from './Server/Setup';
import _ from './Shared/Lodash';
import {Route} from './Types/Route';
import {Settings} from './Types/Settings';

export * from './Types';
export * as lodash from './Shared/Lodash';

export const Microservice = (settings?: Settings) => (middleware?: any[]) => (routes: Route[]) =>
  _.pipe(Setup(settings || {}), Middleware(middleware), Routes(routes), ErrorHandling, Serve);
