export const search = (q, type) => {
  fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
  .then(data => data.json());
};
export const searchAlbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
