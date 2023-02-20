import React from 'react';
import {View, Text, FlatList, StatusBar, StyleSheet, Image} from 'react-native';
import {useQuery, gql} from '@apollo/client';
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

const separator = () => (
  <View
    style={{
      height: 8,
      width: '100%',
    }}
  />
);

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
    <View style={styles.container}>
      <Image
        source={{
          uri: props.item.thumbnail,
        }}
        style={{width: 170, aspectRatio: 16 / 9, borderRadius: 10}}
      />
      <View style={styles.wrapper}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>Geography</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={{fontSize: 15}}>
          {props.item.title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.timex}>{props.item.time} | </Text>
          <Text style={styles.timex}>100 likes |</Text>
          <Text style={styles.timex}>{props.item.createdAt}</Text>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
    // borderWidth: 1,
    // borderColor: 'red',
    borderRadius: 10,
    backgroundColor: 'white',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
  },
  wrapper: {flex: 1, justifyContent: 'space-between', padding: 8},
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    borderWidth: 1,
    fontFamily: 'Times New Roman',
  },
  timex: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 12,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default VideosScreen;
