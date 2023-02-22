import tw from 'twrnc';
import React from 'react';
import {View, Text, FlatList, Image, Dimensions, Button} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const Separator = () => <View style={tw`h-2`} />;

const GET_TEST = gql`
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

const width = Dimensions.get('window').width;

const Item = props => {
  console.log(props);
  return (
    <View
      style={tw.style('flex flex-col rounded-lg bg-white', {
        width: width / 2 - 8,
      })}>
      <Image
        source={{
          uri: props.item.image,
        }}
        style={tw`h-60 rounded-lg`}
      />
      <View style={tw`h-24 flex justify-between p-2`}>
        <Text style={tw`text-xs font-bold text-red-700`}>Geography</Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={tw`text-[14px] font-bold text-black`}>
          {props.item.title}
        </Text>
        <View>
          <Text style={tw`text-[10px]`}>100 likes | 180 attempts</Text>
        </View>
        {/* <View style={tw`flex-row space-x-4 px-1 pb-1 flex justify-between `}>
          <Text
            style={tw`text-[10px] shadow bg-orange-200 text-red-700 rounded-sm`}>
            ${props.item.price}
          </Text>

          <Text style={tw`text-[10px]`}>{props.item.offer}%off</Text>
        </View> */}
        <Text style={tw`self-start p-[2px] text-xs rounded shadow bg-teal-200`}>
          Read Free →
        </Text>
      </View>
    </View>
  );
};

function DocumentsScreen() {
  const {loading, error, data} = useQuery(GET_TEST, {
    variables: {
      filter: {
        type: 'Document',
      },
    },
  });

  console.log(data);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View>
      <FlatList
        data={data?.contents?.payload}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={Separator}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={tw`justify-between`}
        contentContainerStyle={tw`p-1`}
      />
    </View>
  );
}

export default DocumentsScreen;
