import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={add}
        title="Click"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
