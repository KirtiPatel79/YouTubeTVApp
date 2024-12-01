import React, { useRef } from 'react';
import { StyleSheet, View, useTVEventHandler } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useTVEventHandler((evt) => {
    if (evt.eventType === 'playPause') {
      playerRef.current?.getCurrentTime().then((currentTime) => {
        playerRef.current?.seekTo(currentTime);
      });
    } else if (evt.eventType === 'rewind') {
      playerRef.current?.getCurrentTime().then((currentTime) => {
        playerRef.current?.seekTo(currentTime - 10);
      });
    } else if (evt.eventType === 'fastForward') {
      playerRef.current?.getCurrentTime().then((currentTime) => {
        playerRef.current?.seekTo(currentTime + 10);
      });
    }
  });

  return (
    <View style={styles.container}>
      <YoutubePlayer
        ref={playerRef}
        height={300}
        play={true}
        videoId={videoId}
        onChangeState={event => console.log(event)}
      />
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
});

export default YouTubePlayer;
