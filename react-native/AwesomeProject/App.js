import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
<p style='text-align:center;'>
  Coloque o link do DSR e Barra de Cookies aqui.
</p>`
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Possui dados conosco?</Text>
      <StatusBar style="auto" />
      <RenderHtml source={source}/>
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
