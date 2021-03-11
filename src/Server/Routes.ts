import AsyncMethod from '../Shared/AsyncMethod';
import { Route } from '../Types/Route';
import { SetupResults } from '../Types/SetupResults';

export default (routes: Route[]) => (setup: SetupResults): SetupResults => {
  const { settings, app } = setup;

  routes.forEach((route: Route) => app[route.method](route.path, AsyncMethod(route.fn)));

  return { settings, app };
};
