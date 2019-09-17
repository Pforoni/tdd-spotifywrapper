
global.fetch = require('node-fetch');

import { searchAlbums } from '../src/index';

const albums = searchAlbums('Incubus');

console.log('File albums', albums);

albums.then(data => console.log('Retorno json:', data));
