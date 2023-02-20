import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Counter from './Counter';
import Practice1 from './prac/Practice1';
import ModalComp from './ModalComp';
import StatusBarAdd from './prac/StatusBarAdd';
import DrawerLayoutAdd from './prac/DrawerLayoutAdd';
import DisplayPic from './prac/DisplayPic';
import KeyboardAvoidView from './prac/KeyboardAvoidView';
import VirtualList from './prac/VirtualList';
import NestedPress from './prac/NestedPress';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [name, setName] = useState('Ankit');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.textColor}>{name}</Text>
        <Button
          title="Change name to manish"
          onPress={() => {
            setName('Manish');
          }}
        />
        <Button title="Press me" onPress={() => Alert.alert('why clicked')} />
        <Separator />
        <Practice1 />
        <View style={[styles.container, styles.horizontal]}>
          <Counter />
          {/* <ActivityIndicator /> */}
          <ActivityIndicator size="large" bool="false" />
          <ActivityIndicator size="small" bool="false" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
          <Image
            style={{width: 100, height: 150}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <Image
            accessibilityLabel="what is this"
            tintColor="red"
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <ModalComp />
        </View>
        <NestedPress />
        <StatusBarAdd />
        <DrawerLayoutAdd />
        <DisplayPic />
        <KeyboardAvoidView />
        <VirtualList />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  textColor: {color: 'red'},
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tinyLogo: {
    width: 55,
    height: 50,
  },
});

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
