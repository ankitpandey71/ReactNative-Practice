import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Videos"
        onPress={() => navigation.navigate('Videos')}
      />
      <Button
        title="Go To Tests"
        onPress={() => navigation.navigate('Tests')}
      />
      <Button
        title="Go To Documents"
        onPress={() => navigation.navigate('Documents')}
      />
    </View>
  );
}

export default HomeScreen;
