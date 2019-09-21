
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
    token: 'BQBaivJYH9xjQe-IdNIwr20Ngm-uYQWuERhXU7MgtvUPY9IhGe_CQhDY5R_UHuIQIC-rli-kOV9UniOzwOZiuX4wOmU7tn5h2A8W2a0NKSBromziQt_FLYBK30xtzea-guN_UVLAV7vvomre_uMBfrYtC6EtWUeqOwRQNAaWGcCHNEvsP_tuz1GEHDfhlPOMD4RJOzFrIwaunlYB6BDhksv1RqBTFPpYjhXm7xxAsVJ14kCYJ-P1qCi58wlChjCU77oV6uTEKBMfggAzBA'
});

const albums = spotify.search.searchAlbums('Incubus');

console.log('File albums', albums);

albums.then(data => console.log('Retorno json:', data));
