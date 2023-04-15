import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{margin: 20}}>Fetch-data from Json Server</Text>
      {data.length
        ? data.map(item => (
            <View style={{borderWidth: 1, borderColor: 'grey'}}>
              <Text style={{fontSize: 30, margin: 5}}>Name: {item.name}</Text>
              <Text style={{fontSize: 30, margin: 5}}>Age: {item.age}</Text>
              <Text style={{fontSize: 30, margin: 5}}>Email: {item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default App;
