import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  Button,
  TextInput,
} from 'react-native';

const DATA = [
  {id: 1, title: 'Item 1'},
  {id: 2, title: 'Item 2'},
  {id: 3, title: 'Item 3'},
  {id: 4, title: 'Item 4'},
  {id: 5, title: 'Item 5'},
  {id: 6, title: 'Item 6'},
  {id: 7, title: 'Item 7'},
  {id: 8, title: 'Item 8'},
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Separator = () => {
  return <View style={{height: 1, backgroundColor: 'gray'}} />;
};

const EmptyComponent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>No items to display here</Text>
    </View>
  );
};

const FlatListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        numColumns="2"
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={EmptyComponent}
        ListFooterComponent={EmptyComponent}
        ListHeaderComponent={EmptyComponent}
      />
      <ScrollView>
        <Image
          style={{width: 100, height: 250}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TextInput placeholder="Username" />
        <ImageBackground
          style={{height: 250}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}>
          <Text style={{color: 'red'}}>What is This</Text>
          <Image
            style={{height: 50}}
            source={{uri: 'https://neverinstall.com/niLogoWhite.svg'}}
          />
          <Button title="press here" />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListScreen;
