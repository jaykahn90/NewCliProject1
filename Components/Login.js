import {View, Text, Button, TextInput} from 'react-native';
export const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button
        title="Go to homepage"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
