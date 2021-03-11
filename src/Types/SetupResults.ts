import {Application} from 'express';

import {Settings} from '../Types/Settings';

export type SetupResults = { settings: Settings; app: Application };
