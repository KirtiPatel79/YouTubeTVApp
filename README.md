# YouTube TV App

This project is a React Native application for Android TV that allows users to watch YouTube live streams.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- You have installed [React Native CLI](https://reactnative.dev/docs/environment-setup).
- You have an Android TV device or emulator set up.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/KirtiPatel79/YouTubeTVApp.git
cd YouTubeTVApp
```

2. Install the dependencies:

```sh
npm install
```

## Configuration

1. Open `components/ChannelFetcher.js` and replace `YOUR_CHANNEL_ID` with your actual YouTube channel ID.
2. Replace `YOUR_API_KEY` with your actual YouTube Data API key.

## Running the Project

1. Start the React Native development server:

```sh
npm start
```

2. Run the app on an Android TV device or emulator:

```sh
npm run android-tv
```

## Additional Information

- This project uses `react-native-youtube-iframe` for embedding YouTube videos.
- Navigation is handled using `react-navigation`.

For more information, refer to the official documentation of the libraries used in this project.
