// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportStudyBook from '../../../app/model/studyBook';

declare module 'egg' {
  interface IModel {
    StudyBook: ReturnType<typeof ExportStudyBook>;
  }
}
