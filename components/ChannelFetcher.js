import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ChannelFetcher = ({ onLiveStream }) => {
  const [channelData, setChannelData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=YOUR_CHANNEL_ID&eventType=live&type=video&key=YOUR_API_KEY`
        );
        const liveStream = response.data.items[0];
        if (liveStream) {
          onLiveStream(liveStream.id.videoId);
        }
        setChannelData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchChannelData();
  }, []);

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {channelData && <Text style={styles.text}>Channel Data Fetched</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
  error: {
    color: 'red',
  },
});

export default ChannelFetcher;
