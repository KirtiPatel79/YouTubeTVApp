import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useTVEventHandler } from 'react-native';
import YouTubePlayer from '../components/YouTubePlayer';
import ChannelFetcher from '../components/ChannelFetcher';

const Stack = createStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();

  useTVEventHandler((evt) => {
    if (evt.eventType === 'right') {
      navigation.navigate('YouTubePlayer');
    } else if (evt.eventType === 'left') {
      navigation.navigate('ChannelFetcher');
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ChannelFetcher} />
        <Stack.Screen name="YouTubePlayer" component={YouTubePlayer} />
        <Stack.Screen name="ChannelFetcher" component={ChannelFetcher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
