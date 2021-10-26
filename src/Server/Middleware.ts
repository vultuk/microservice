import bodyParser from 'body-parser';
import { Settings } from '../Types/Settings';

import { SetupResults } from '../Types/SetupResults';

export default (middleware?: any[], appOnlyMiddleware: any[] = [], settings: Settings = {}) => (setup: SetupResults): SetupResults => {
  const { settings, app } = setup;

  [bodyParser.json({limit: settings.bodySize ?? "100kb"}), ...(middleware || [])].forEach((item) => app.use(item));
  appOnlyMiddleware.forEach((item) => item(app));

  return { settings, app };
};
