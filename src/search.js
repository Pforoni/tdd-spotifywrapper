function seacher(type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`);
}

export default function search() {
  return {
    searchAlbums: seacher.bind(this, 'searchAlbums'),
    artist: seacher.bind(this, 'artist'),
    searchTracks: seacher.bind(this, 'searchTracks'),
    searchPlaylists: seacher.bind(this, 'searchPlaylists'),
  }
};

