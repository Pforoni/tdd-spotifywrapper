import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
    it('should create an instance of SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceof(SpotifyWrapper);
      });
});