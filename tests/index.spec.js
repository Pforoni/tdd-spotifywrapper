//https://github.com/willianjusten/spotify-wrapper/commit/aa9e769454226e26639685c6391f6a61a0b940d9

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

    it('should receive apiURL as an option', () => {
        let spotify = new SpotifyWrapper({
            apiURL: 'blabla'
        });

        expect(spotify.apiURL).to.equal('blabla');
    });

    it('should use the default apiURL if not provided', () => {
        let spotify = new SpotifyWrapper({});
         expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({
            token: 'foo'
        });

        expect(spotify.token).to.equal('foo');
    });
});