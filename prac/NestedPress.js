import React from 'react';
import {
  Alert,
  Pressable,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';

const NestedPress = () => {
  const Pressme = () => {
    Alert.alert('Pressing done');
  };
  return (
    <View>
      <Pressable onPress={Pressme}>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
      </Pressable>
      <TouchableHighlight onPress={Pressme}>
        <Text>I'm Touchable!</Text>
      </TouchableHighlight>
    </View>
  );
};

export default NestedPress;
