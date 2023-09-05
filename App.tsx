import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
// import RNAutostart from 'react-native-autostart';
import AutoStart from 'react-native-autostart';

const getDataDevice = `(function() {
  const tokenLocalStorage = window.localStorage.getItem('device');
  console.log('Token push ', tokenLocalStorage);
  window.ReactNativeWebView.postMessage(tokenLocalStorage);
})();`;

const App = () => {
    if(AutoStart.isCustomAndroid()) {
        AutoStart.startAutostartSettings();
    }

    function onMessage333(data) {
        let deviceCode = data?.nativeEvent?.data
        console.log('Device Code ' + deviceCode);
    }

    return <WebView source={{ uri: 'https://reklame.purwosejati.com/display' }}
          style={{ flex: 1 }}
          mediaPlaybackRequiresUserAction={false}
          injectedJavaScript={getDataDevice}
          onMessage={onMessage333}
          />;
}

export default App;