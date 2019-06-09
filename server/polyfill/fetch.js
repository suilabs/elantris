import fetch, { Headers } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;
