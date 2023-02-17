import React, {useState} from 'react';
import {Button, Text, View, Modal} from 'react-native';

const ModalComp = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Button title="Open Model" onPress={() => setVisible(true)} />
      <Modal visible={visible}>
        <View>
          <Text>Hello</Text>
        </View>
        <View>
          <Text>What</Text>
        </View>
        <View>
          <Text>Why</Text>
        </View>
        <View>
          <Text>Where</Text>
        </View>
        <Button title="Close" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
};

export default ModalComp;
