// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportStudy from '../../../app/controller/study';

declare module 'egg' {
  interface IController {
    study: ExportStudy;
  }
}
