import React from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Components/Home';
import {Login} from './Components/Login';
import {Header} from './Components/Header';

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.warn('Button-Pressed');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTintColor: 'blue',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft: props => <Button onPress={btnAction} title="Left" />,
            headerRight: () => <Header />,

            title: 'User Login Details',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'green',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
