export const search = (query, type) => {
  console.log('teste1');
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json())

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
