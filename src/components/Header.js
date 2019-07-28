import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  view: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    elevation: 2,
  },
  text: {
    fontSize: 30,
  },
};

const Header = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default Header;
