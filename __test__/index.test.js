import { baseURL } from '../src/server/index.js';

const basesURL = require('../src/server/index.js');
describe('The base URL is complete', () => {
    test('base url is complete', () => {
      expect(basesURL).toMatch("https://api.meaningcloud.com/sentiment-2.1?key=");
    });
  });

//Example taken from jest documentation: https://jestjs.io/docs/expect#tomatchregexp--string
