import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Button from './Button';

const styles = {
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#222',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  coverWrap: {
    flex: 1,
  },
  cover: {
    height: 300,
    flex: 1,
  },
  albumInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: {
    width: 90,
    height: 90,
  },
  infosWrap: {
    marginLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNow: {
    wrap: {
      backgroundColor: '#ddd',
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
    label: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '700',
    },
  },
};

class AlbumCard extends Component {
  handleBuyNowPress() {
    console.log(this.props.album.url);
    Linking.openURL(this.props.album.url);
  }

  render() {
    const { album } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.coverWrap}>
          <Image source={{ uri: album.image }} style={styles.cover} />
        </View>

        <View style={styles.albumInfo}>
          <View>
            <Image
              source={{ uri: album.thumbnail_image }}
              style={styles.thumb}
            />
          </View>
          <View style={styles.infosWrap}>
            <Text style={styles.title}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </View>

        <View>
          <Button
            style={styles.buyNow}
            label={'Buy Now'}
            onPress={() => this.handleBuyNowPress()}
          />
        </View>
      </View>
    );
  }
}

export default AlbumCard;
