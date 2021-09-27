import ImagesApiService from './js/apiService';

import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
import { defaults } from '@pnotify/core';
defaults.width = '300px';
defaults.delay = '3000';
defaults.minHeight = '86px';
