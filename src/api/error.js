import _ from 'lodash';

export const ErrorCodes = {
};

export const getErorrCode = err => _.get(err, ['response', 'data', 'code'], 0);
