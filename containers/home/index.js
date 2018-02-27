import React from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {
   static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name="ios-information-circle" size={25} color={tintColor} />;
      },
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
