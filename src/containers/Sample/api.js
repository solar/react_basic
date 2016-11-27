import { client } from 'api/client';

export const sampleApi = text =>
  client.get(`http://echo.jsontest.com/value/${text}`);
