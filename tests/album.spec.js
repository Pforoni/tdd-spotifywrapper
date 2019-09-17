//getAlbum
//getAlbumTracks

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
    let stubedFetch;

    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {
        
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exists;
        });

        it('should have getAlbums method', () => {
            expect(getAlbums).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });


    });

    describe('getAlbum', () => {
        it('should call fetch method', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        
        it('should call tech with the correct url', () => {
            const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

            const album2 = getAlbum('0sNOF9WDwhWunNAHPD3BaK');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3BaK');
        });
        //verifica se o dado é recebido pela Promise
    });

    describe('getAlbums', () => {
        it('should call fetch method', () => {
            const albums = getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        
        it('should call tech with the correct url', () => {
            const albums = getAlbum('0sNOF9WDwhWunNAHPD3Baj', '0sNOF9WDwhWunNAHPD3BaK');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/ids=0sNOF9WDwhWunNAHPD3Baj,0sNOF9WDwhWunNAHPD3BaK');
        });
        //verifica se o dado é recebido pela Promise
    });

    describe('getAlbumsTracks', () => {
        it('should call fetch method', () => {
          const tracks = getAlbumTracks();
          expect(stubedFetch).to.have.been.calledOnce;
        });
    
        it('should call fetch with the correct URL', () => {
          const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
          expect(stubedFetch).to.have.been
            .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
        });
    
        //verifica se o dado é recebido pela Promise
      });

});