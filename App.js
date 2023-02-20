import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import TestsScreen from './screens/TestsScreen';
import VideosScreen from './screens/VideosScreen';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://192.168.1.41:4000/',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Videos" component={VideosScreen} />
            <Stack.Screen name="Tests" component={TestsScreen} />
            <Stack.Screen name="Documents" component={DocumentsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
}

export default App;
