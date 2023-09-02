import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
// import RNAutostart from 'react-native-autostart';
import AutoStart from 'react-native-autostart';

const App = () => {
    // RNAutostart.open();
    if(AutoStart.isCustomAndroid()) {
        AutoStart.startAutostartSettings();
    }

    return <WebView source={{ uri: 'https://reklame.purwosejati.com/display' }}
          style={{ flex: 1 }}
          mediaPlaybackRequiresUserAction={false}
          />;
}

export default App;