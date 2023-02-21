import React from 'react';
import {View, Text, FlatList, StatusBar, StyleSheet, Image} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import tw from 'twrnc';
// import {client} from '../App';

// client
//   .query({
//     query: gql`
//       query Videos {
//         videos {
//           payload {
//             title
//           }
//         }
//       }
//     `,
//   })
//   .then(result => console.log(result));

const separator = () => <View style={tw`h-2`} />;

const GET_VIDEOS = gql`
  query Videos {
    videos {
      payload {
        _id
        title
        thumbnail
        time
        createdAt
      }
    }
  }
`;
const Item = props => {
  console.log(props);
  return (
    <View style={tw`flex-row pb-2 px-2 rounded-lg`}>
      <Image
        source={{
          uri: props.item.thumbnail,
        }}
        style={tw`w-44 h-24 rounded-lg`}
      />
      <View style={tw`flex justify-between px-1`}>
        <Text style={tw`text-xs font-bold`}>Geography</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={tw`text-[14px] font-bold`}>
          {props.item.title}
        </Text>
        <View style={tw`flex-row`}>
          <Text style={tw`text-[10px]`}>{props.item.time} | </Text>
          <Text style={tw`text-[10px]`}>100 likes |</Text>
          <Text style={tw`text-[10px]`}>{props.item.createdAt}</Text>
        </View>
      </View>
    </View>
  );
};

function VideosScreen() {
  const {loading, error, data} = useQuery(GET_VIDEOS);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View style={{flex: 1}}>
      <Text>VideosScreen</Text>
      <FlatList
        data={data.videos.payload}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={separator}
      />
      {/* <FlatList data={GET_VIDEOS}
      renderItem={({title}) => <Item title={}}/>
      {data?.videos?.payload.map(({title}) => (
        <Text>{title}</Text>
      ))} */}
    </View>
  );
}

export default VideosScreen;
