// import {useNavigation} from '@react-navigation/native';
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
      <Button
        title="Go To TabNavigator"
        onPress={() => navigation.navigate('TabNavigator')}
      />
      <Button
        title="Go To Practice"
        onPress={() => navigation.navigate('Practice1')}
      />
      <Button
        title="Go To Practice2"
        onPress={() => navigation.navigate('Practice2')}
      />
      <Button
        title="Go To Activity Indicator"
        onPress={() => navigation.navigate('Activity Indicator')}
      />
      <Button
        title="Go To Button Screen"
        onPress={() => navigation.navigate('Button Screen')}
      />
      <Button
        title="Go To FlatList Screen"
        onPress={() => navigation.navigate('FlatList Screen')}
      />
      <Button
        title="Go To KeyboardAvoidingView Screen"
        onPress={() => navigation.navigate('KeyboardAvoidingView Screen')}
      />
      <Button
        title="Go To Modal Screen"
        onPress={() => navigation.navigate('Modal Screen')}
      />
      <Button
        title="Go To VirtualizedList Screen"
        onPress={() => navigation.navigate('VirtualList Screen')}
      />
      <Button
        title="Go To PanResponder Screen"
        onPress={() => navigation.navigate('PanResponder Screen')}
      />
      <Button
        title="Go To Vibration Screen"
        onPress={() => navigation.navigate('Vibration Screen')}
      />
      <Button
        title="Go To Share Screen"
        onPress={() => navigation.navigate('Share Screen')}
      />
    </View>
  );
}

export default HomeScreen;
