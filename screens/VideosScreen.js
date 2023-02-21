import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useQuery, gql} from '@apollo/client';

const separator = () => <View style={tw`h-2`} />;

const GET_VIDEOS = gql`
  query Contents($filter: ContentsFilterInput) {
    contents(filter: $filter) {
      payload {
        title
        type
        updatedAt
        price
        offer
        image
        createdAt
        _id
      }
    }
  }
`;
console.log(GET_VIDEOS);
const Item = props => {
  console.log(props);
  return (
    <View style={tw`flex-row pb-2 px-2 rounded-lg`}>
      <Image
        source={{
          uri: props.item.image,
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
  const {loading, error, data} = useQuery(GET_VIDEOS, {
    variables: {
      filter: {
        type: 'Video',
      },
    },
  });

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View style={{flex: 1}}>
      <Text>VideosScreen</Text>
      <FlatList
        data={data?.contents?.payload}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}

export default VideosScreen;
