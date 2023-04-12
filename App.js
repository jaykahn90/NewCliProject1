import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 20, margin: 20}}>Flatlist with API data</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                padding: 10,
              }}>
              <Text
                style={{fontSize: 24, margin: 20, backgroundColor: 'skyblue'}}>
                {item.id}
              </Text>
              <Text style={{fontSize: 18, margin: 20}}>{item.title}</Text>
              <Text style={{fontSize: 18, margin: 20}}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default App;
