import React, {useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Button,
  DevSettings,
  Easing,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Practice1 = () => {
  const [givename, setGivename] = useState('');
  const giveAlert = () => {
    Alert.alert('pressing done');
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <Text>WHAT is this</Text>
      <KeyboardAvoidingView>
        <TextInput
          onChangeText={setGivename}
          value={givename}
          style={{borderWidth: 1, backgroundColor: 'blue'}}
        />
      </KeyboardAvoidingView>
      <Text>{givename}</Text>
      <Pressable
        onPress={giveAlert}
        android_ripple={{color: 'gray', radius: 30}}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <TouchableHighlight onPress={giveAlert}>
        <Text>Touchable highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={giveAlert}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={giveAlert}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
      <Animated.Text
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.Text>
      <Button title="Fade In View" onPress={fadeIn} />
      <Button title="Fade Out View" onPress={fadeOut} />
      <Button
        title="add menu Item"
        onPress={DevSettings.addMenuItem('Show Secret Dev Screen', () => {
          Alert.alert('Showing secret dev screen!');
        })}
      />
      <Button title="Relaod" onPress={() => DevSettings.reload()} />
    </>
  );
};

const styles = StyleSheet.create({
  fadingText: {
    fontSize: 28,
  },
});

export default Practice1;

// import React, {useState, useEffect} from 'react';
// import {AccessibilityInfo, View, Text, StyleSheet} from 'react-native';

// const Practice1 = () => {
//   const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
//   const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

//   useEffect(() => {
//     const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
//       'reduceMotionChanged',
//       isReduceMotionEnabled => {
//         setReduceMotionEnabled(isReduceMotionEnabled);
//       },
//     );
//     const screenReaderChangedSubscription = AccessibilityInfo.addEventListener(
//       'screenReaderChanged',
//       isScreenReaderEnabled => {
//         setScreenReaderEnabled(isScreenReaderEnabled);
//       },
//     );

//     AccessibilityInfo.isReduceMotionEnabled().then(isReduceMotionEnabled => {
//       setReduceMotionEnabled(isReduceMotionEnabled);
//     });
//     AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled => {
//       setScreenReaderEnabled(isScreenReaderEnabled);
//     });

//     return () => {
//       reduceMotionChangedSubscription.remove();
//       screenReaderChangedSubscription.remove();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.status}>
//         The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disabled'}.
//       </Text>
//       <Text style={styles.status}>
//         The screen reader is {screenReaderEnabled ? 'enabled' : 'disabled'}.
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   status: {
//     margin: 30,
//   },
// });

// export default Practice1;

// import React, {useRef} from 'react';
// import {Animated, PanResponder, StyleSheet, View} from 'react-native';

// const Practice1 = () => {
//   const pan = useRef(new Animated.ValueXY()).current;

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([
//       null,
//       {
//         dx: pan.x, // x,y are Animated.Value
//         dy: pan.y,
//       },
//     ]),
//     onPanResponderRelease: () => {
//       Animated.spring(
//         pan, // Auto-multiplexed
//         {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
//       ).start();
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         {...panResponder.panHandlers}
//         style={[pan.getLayout(), styles.box]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     backgroundColor: '#61dafb',
//     width: 80,
//     height: 80,
//     borderRadius: 4,
//   },
// });

// export default Practice1;

// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, Text, AppState} from 'react-native';

// const App = () => {
//   const [aState, setAppState] = useState(AppState.currentState);
//   useEffect(() => {
//     const appStateListener = AppState.addEventListener(
//       'change',
//       nextAppState => {
//         console.log('Next AppState is: ', nextAppState);
//         setAppState(nextAppState);
//       },
//     );
//     return () => {
//       appStateListener?.remove();
//     };
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.txt}>
//         Current App State is: <Text style={styles.aState}>{aState}</Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   txt: {
//     color: '#d9d9d9',
//     fontSize: 18,
//   },
//   aState: {
//     color: '#fff',
//   },
// });
// export default App;
