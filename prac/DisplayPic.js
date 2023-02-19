import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

const DisplayPic = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Image
              style={{width: 600, height: 500}}
              source={{
                uri: 'https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg',
              }}
              alt="please Wait"
              // blurRadius={1}
              fadeDuration={50}
              resizeMethod={'auto'}
            />
          </View>
          <Text>Hello</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DisplayPic;
