import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const styles = {
  appWrap: { flex: 1 },
};

const App = () => {
  return (
    <View style={styles.appWrap}>
      <Header text={'Albums'} />
      <AlbumList />
    </View>
  );
};

export default App;
