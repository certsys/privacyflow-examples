import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';

export default function App() {
  const [data, setData] = useState([]);
  const [isReqEnabled, setIsReqEnabled] = useState(false);
  const [isFunEnabled, setIsFunEnabled] = useState(false);
  const [expanded, setExpanded] = useState(true);


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
      <StatusBar style="auto" />

      <View>
        <Text style={styles.title}>
          Categorias de cookies
        </Text>
      </View>

      <View>
        <View style={styles.catHeaderRow}>
          <View style={styles.catHeaderRowLeft}>
            <Ionicons
              style={styles.catHeaderIcon}
              name="md-checkmark-circle"
              size={18}
              color="gray"
            />
            <Text style={styles.catHeader}>
              Necessários
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#929398", true: "#e95b2d80" }}
            thumbColor={isReqEnabled ? "#e95b2dFF" : "#494949"}
            backgroundColor={isReqEnabled ? "#e95b2dFF" : "#494949"}
            ios_backgroundColor="#494949"
            onValueChange={() => setIsReqEnabled(previousState => !previousState)}
            value={isReqEnabled}
          />
        </View>
        <Text style={styles.catDesc}>
          Os cookies necessários são absolutamente essenciais para o funcionamento adequado do site. Esses cookies garantem funcionalidades básicas e recursos de segurança do site, de forma anônima.
        </Text>
        <List.Accordion
          title="Mais detalhes"
          titleStyle={styles.acordionTitle}
        >
          <View style={styles.acordionItem}>
            <Text style={styles.acordionItemDesc}>AWSELB</Text>
            <Text style={styles.acordionItemDesc}>www.outback.com.br</Text>
          </View>
          <View style={styles.acordionItem}>
            <Text style={styles.acordionItemDesc}>OptanonConsent</Text>
            <Text style={styles.acordionItemDesc}>.outback.com.br</Text>
          </View>
        </List.Accordion>
      </View>

      <View>
        <View style={styles.catHeaderRow}>
          <View style={styles.catHeaderRowLeft}>
            <Ionicons
              style={styles.catHeaderIcon}
              name="md-checkmark-circle"
              size={18}
              color="gray"
            />
            <Text style={styles.catHeader}>
              Funcionais
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#929398", true: "#e95b2d80" }}
            thumbColor={isFunEnabled ? "#e95b2dFF" : "#494949"}
            backgroundColor={isFunEnabled ? "#e95b2dFF" : "#494949"}
            ios_backgroundColor="#494949"
            onValueChange={() => setIsFunEnabled(previousState => !previousState)}
            value={isFunEnabled}
          />
        </View>
        <Text style={styles.catDesc}>
          Os cookies funcionais ajudam a executar certas funcionalidades, como compartilhar o conteúdo do site em plataformas de mídia social, coletar feedbacks e outros recursos de terceiros.
        </Text>
        <List.Accordion
          title="Mais detalhes"
          titleStyle={styles.acordionTitle}
        >
          <View style={styles.acordionItem}>
            <Text style={styles.acordionItemDesc}>_pin_unauth</Text>
            <Text style={styles.acordionItemDesc}>.outback.com.br</Text>
          </View>
        </List.Accordion>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: "#e95b2dff",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "bold",
  },
  catHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "30px",
    alignItems: "center",
  },
  catHeaderRowLeft: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  catHeaderIcon: {
    marginTop: "10px",
    marginRight: "16px",
    marginBottom: "14px"
  },
  catHeader: {
    color: "#494949",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "14px",
  },
  catDesc: {
    color: "#949494",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: ".62px",
  },
  acordionTitle: {
    color: "#e95b2dff",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "bold",
    letterSpacing: ".62px",
    paddingLeft: "15px",
  },
  acordionItem: {
    marginTop: "8px"
  },
  acordionItemDesc: {
    color: "#494949",
    fontSize: "10px",
    fontWeight: "bold",
    lineHeight: "14px",
    letterSpacing: ".62px",
    wordBreak: "break-all",
  },

});
