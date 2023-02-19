import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Practice1 = () => {
  const [givename, setGivename] = useState('');
  const giveAlert = () => {
    Alert.alert('pressing done');
  };
  return (
    <>
      <Text>WHAT is this</Text>
      <TextInput
        onChangeText={setGivename}
        value={givename}
        style={{borderWidth: 1, backgroundColor: 'blue'}}
      />
      <Text>{givename}</Text>
      <Pressable
        onPress={giveAlert}
        android_ripple={{color: 'gray', radius: 30}}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <TouchableHighlight onPress={giveAlert}>
        <Text>Touchable highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={giveAlert}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={giveAlert}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Practice1;
