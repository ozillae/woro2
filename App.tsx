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
    // AutoStart.enable();

    // To check if auto-start is enabled
    // AutoStart.isEnabled().then(enabled => {
    //   if (enabled) {
    //     // Auto-start is enabled
    //     console.log('Auto Enabled');
    //   } else {
    //     // Auto-start is not enabled
    //     console.log('Disable AutoStart');
    //   }
    // });

    if(AutoStart.isCustomAndroid()) {
        AutoStart.startAutostartSettings();
    }
    
    const [urldest, setUrldest] = useState('https://reklame.purwosejati.com/display');

    // let urldest = 'https://reklame.purwosejati.com/display';

    function onMessage333(data) {
        let deviceCode = data?.nativeEvent?.data
        //  console.log('Device Code ' + deviceCode);
        let content = JSON.parse(deviceCode);

        let dvcode = content.code;
        let contentCode  = content.contentId;

        let page  = '';
        // swich page 
        switch (content.contentType){
            case 1:
                page = "list-series";
            break;
            case 2:
                page = "list-video";
            break;
            case 3:
                page = "list-play";
            break;
            case 4:
                page = "list-template";
            break;
            case 5:
                page = "list-page";
            break;
            default :
            page  = "";
        }


        let dest = 'https://reklame.purwosejati.com/'+page+'/'+dvcode+'/'+contentCode;
        setUrldest(dest)
    }

    // console.log('urldest ', urldest)
    return <WebView source={{ uri: urldest }}
          style={{ flex: 1 }}
          mediaPlaybackRequiresUserAction={false}
          injectedJavaScript={getDataDevice}
          onMessage={onMessage333}
          />;
}

export default App;