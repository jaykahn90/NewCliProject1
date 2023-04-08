import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);
  const getAPIData = async () => {
    //api call
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      {data ? (
        <View>
          <Text style={{fontSize: 25, padding: 15}}>{data.id}</Text>
          <Text style={{fontSize: 25, padding: 15}}>{data.userId}</Text>
          <Text style={{fontSize: 25, padding: 15}}>{data.title}</Text>
          <Text style={{fontSize: 25, padding: 15}}>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;
