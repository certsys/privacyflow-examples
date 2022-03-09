import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { WebView } from 'react-native-webview';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
<div id="implementationDSR">Id</div>
<p style='text-align:center;'>
  Coloque o link do DSR e Barra de Cookies aqui.
</p>`
};

export default function App() {
  const [data, setData] = useState([]);

  const getLinks = async () => {
    try {
     const response = await fetch('http://localhost:3333/api/v1/cookie_bars/token/62276367c37cdd001c99cdd2');
     setData(response)
     console.log(response)
    //  const json = await response.json();
    //  console.log(json)
   } catch (error) {
     console.error(error);
   }
  }

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Possui dados conosco?</Text>
      <StatusBar style="auto" />
      <RenderHtml source={source}/>
      <RenderHtml source={{html: data}}/>
      <WebView source={{ uri: 'http://localhost:3333/api/v1/cookie_bars/token/62276367c37cdd001c99cdd2' }} />
      <WebView source={{ uri: 'http://localhost:3333/api/v1/dsr/token/6227640bc37cdd001c99ce7a' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
