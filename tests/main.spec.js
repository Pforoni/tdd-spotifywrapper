import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);


global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {

  describe('smoke tests', () => {

    it('should exist search method', () => {
      expect(search).to.exist;
    });

    it('should exist searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
  describe('Generic Search', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      //promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('deadfish', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=deadfish&type=artist');


        const albums = search('Incubus', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('deadfish', ['artist', 'album']);

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=deadfish&type=artist,album');
      });
    });

    it('should return the JSON Data from the Promise', () => {

    });
  });
});
