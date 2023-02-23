import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import TestsScreen from './screens/TestsScreen';
import VideosScreen from './screens/VideosScreen';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import TabNavigator from './navigator/TabNavigator';
import Practice1 from './prac/Practice1';
import Practice2 from './prac/Practice2';
import ActivityIndicatorScreen from './screens/ActivityIndicatorScreen';
import ButtonScreen from './screens/ButtonScreen';
import FlatListScreen from './screens/FlatListScreen';
import KeyboardAvoidingViewScreen from './screens/KeyboardAvoidingViewScreen';
import ModalScreen from './screens/ModalScreen';
import VirtualList from './screens/VirtualList';

export const client = new ApolloClient({
  uri: 'https://course-cube-server.onrender.com',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerMode: 'screen',
              headerTintColor: 'green',
              headerStyle: {backgroundColor: 'orange'},
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              options={{headerShown: false}}
              name="TabNavigator"
              component={TabNavigator}
            />
            <Stack.Screen name="Videos" component={VideosScreen} />
            <Stack.Screen name="Tests" component={TestsScreen} />
            <Stack.Screen name="Documents" component={DocumentsScreen} />
            <Stack.Screen name="Practice1" component={Practice1} />
            <Stack.Screen name="Practice2" component={Practice2} />
            <Stack.Screen
              name="Activity Indicator"
              component={ActivityIndicatorScreen}
            />

            <Stack.Screen name="Button Screen" component={ButtonScreen} />
            <Stack.Screen name="FlatList Screen" component={FlatListScreen} />
            <Stack.Screen
              name="KeyboardAvoidingView Screen"
              component={KeyboardAvoidingViewScreen}
            />
            <Stack.Screen name="Modal Screen" component={ModalScreen} />
            <Stack.Screen name="VirtualList Screen" component={VirtualList} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
}

export default App;
