import bodyParser from 'body-parser';

import {SetupResults} from '../Types/SetupResults';

export default (middleware?: any[]) => (setup: SetupResults): SetupResults => {
  const { settings, app } = setup;

  [bodyParser.json(), ...(middleware || [])].forEach((item) => app.use(item));

  return { settings, app };
};
