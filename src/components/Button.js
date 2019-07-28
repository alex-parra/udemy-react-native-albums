import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={props.style.wrap} onPress={props.onPress}>
      <Text style={props.style.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
