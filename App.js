import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <Text style={{fontSize: 25, margin: 20}}>List with API Call</Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontSize: 20, backgroundColor: '#ddd'}}>
                {' '}
                ID: {item.id}
              </Text>
              <Text style={{fontSize: 20}}> Title: {item.title}</Text>
              <Text style={{fontSize: 20}}> BODY: {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default App;
