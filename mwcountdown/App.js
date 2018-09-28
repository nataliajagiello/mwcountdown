import React from 'react';
import { YellowBox } from 'react-native';
import EventList from './EventList';
import { createStackNavigator } from 'react-navigation';
import EventForm from './EventForm';
//import { createBottomTabNavigator } from 'react-navigation';

/*
export default createBottomTabNavigator({
  Home: EventList,
//  Settings: SettingsScreen,
});
*/

export default createStackNavigator ({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Coming soon...',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event'
    })
  }
})
