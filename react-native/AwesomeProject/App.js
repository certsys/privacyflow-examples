import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
<script src="https://privacyflow-hotfix.development.tec.br/api/v1/cookie_bars/token/62276367c37cdd001c99cdd2" async></script>
<script src="https://privacyflow-hotfix.development.tec.br/api/v1/dsr/token/6227640bc37cdd001c99ce7a" async></script>

<div id="implementationDSR">Id</div>
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
