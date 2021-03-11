import express, {Application} from 'express';

import {Settings} from '../Types/Settings';
import {SetupResults} from '../Types/SetupResults';

export default (settings: Settings) => (): SetupResults => {
  const app: Application = express();

  return { settings, app };
};
