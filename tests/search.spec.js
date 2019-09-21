import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Search', () => {
  let fetchedStub;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    })
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => { } });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {

    it('should exist searchAlbums method', () => {
      expect(spotify.search.searchAlbums).to.exist;
    });

    it('should exist searchArtists method', () => {
      expect(spotify.search.artist).to.exist;
    });

    it('should exist searchTracks method', () => {
      expect(spotify.search.searchTracks).to.exist;
    });

    it('should exist searchPlaylists method', () => {
      expect(spotify.search.searchPlaylists).to.exist;
    });
  });

  describe('searchaArtists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artist('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = spotify.search.artist('incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist');

      const artists2 = spotify.search.artist('criolo');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=criolo&type=artist');
    });
  });

});
