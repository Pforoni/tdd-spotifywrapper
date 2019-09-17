/*global fetch - informa que o fetch esta na variavel global do Node*/

import {API_URL} from './config';
import {toJson} from './utils';

export const getAlbum = id => {
    return fetch(`${API_URL}/albums/${id}`).then(toJson);
};

export const getAlbums = ids => {
    return fetch(`${API_URL}/albums/?ids=${ids}`).then(toJson);
};

export const getAlbumTracks = id => { 
    return fetch(`${API_URL}/albums/${id}/tracks`).then(toJson);
};