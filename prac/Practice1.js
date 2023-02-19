import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput} from 'react-native';

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
    </>
  );
};

export default Practice1;
