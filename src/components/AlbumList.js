import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import AlbumCard from './AlbumCard';

const API_URL = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    axios.get(API_URL).then(r => {
      this.setState({ albums: r.data });
    });
  }

  render() {
    const { albums } = this.state;

    return (
      <ScrollView>
        {albums.map(album => (
          <AlbumCard key={album.url} album={album} />
        ))}
      </ScrollView>
    );
  }
}

export default AlbumList;
