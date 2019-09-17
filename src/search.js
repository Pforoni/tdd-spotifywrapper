import {API_URL} from './config';
import {toJson} from './utils';

export const search = (query, type) => {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJson);

};
export const searchAlbums = (q) => {
  return search(q, 'album');
};
export const searchArtists = (q) => {
  search(q, 'artist');
};
export const searchTracks = (q) => {
  search(q, 'tracks');
};
export const searchPlaylists = (q) => {
  search(q, 'playlist');
};
