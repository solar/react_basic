import { asyncActionTypes, createAsyncActions } from 'actions/helper';

export const types = asyncActionTypes('app/containers/Sample/', 'SAMPLE');

export const sample = createAsyncActions(types.SAMPLE);
