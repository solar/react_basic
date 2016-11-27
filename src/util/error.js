import _ from 'lodash';

import {
  getErrorCode as getApiErrorCode,
  ErrorCodes as ApiErrorCodes,
} from '../api/error-code';

export const ErrorCodes = {
  ...ApiErrorCodes,

  SIMPLE: 10000,
};

export const getErrorCode = (err) => {
  const apiCode = getApiErrorCode(err);
  if (apiCode > 0) return apiCode;
  return _.get(err, 'code', 0);
};

export class AppError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static raise(code, message = null) {
    throw new AppError(code, message);
  }

  static Simple(message) {
    this.raise(ErrorCodes.SIMPLE, message);
  }
}
