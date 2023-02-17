import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';

const Practice1 = () => {
  const [givename, setGivename] = useState('');
  return (
    <>
      <Text>WHAT is this</Text>
      <TextInput
        onChangeText={setGivename}
        value={givename}
        style={{borderWidth: 1, backgroundColor: 'blue'}}
      />
      <Text>{givename}</Text>
    </>
  );
};

export default Practice1;
