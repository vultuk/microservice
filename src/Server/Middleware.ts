import bodyParser from 'body-parser';

import {SetupResults} from '../Types/SetupResults';

export default (middleware?: any[], appOnlyMiddleware: any[] = []) => (setup: SetupResults): SetupResults => {
  let { settings, app } = setup;

  [bodyParser.json(), ...(middleware || [])].forEach((item) => app.use(item));
  appOnlyMiddleware.forEach((item) => (app = item(app)));

  return { settings, app };
};
