import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YouTubePlayer from './components/YouTubePlayer';
import ChannelFetcher from './components/ChannelFetcher';

const Stack = createStackNavigator();

const App = () => {
  const [liveStream, setLiveStream] = useState(null);

  const handleLiveStream = (stream) => {
    setLiveStream(stream);
  };

  useEffect(() => {
    if (liveStream) {
      // Automatically start playing the live stream in full screen
      // You can add any additional logic here if needed
    }
  }, [liveStream]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => (
            <View style={styles.container}>
              <ChannelFetcher onLiveStream={handleLiveStream} />
              {liveStream && <YouTubePlayer videoId={liveStream} />}
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default App;
