import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';

export default function App() {
  const [cookieBar, setCookieBar] = useState({});
  const [isReqEnabled, setIsReqEnabled] = useState(true);
  const [isFunEnabled, setIsFunEnabled] = useState(false);
  const [isMakEnabled, setIsMakEnabled] = useState(false);
  const [isAnaEnabled, setIsAnaEnabled] = useState(false);
  const [hasCookieBar, setHasCookieBar] = useState(false);

  const getCookieBar = () => {
    try {
     fetch('http://localhost:3333/api/v1/cookie_bars/reactnative/62276367c37cdd001c99cdd2')
      .then((response) => response.json())
      .then((json) => {
        if (Object.hasOwnProperty.call(json, 'cookie_bar')) {
          json.cookie_bar.cookie_list.map(cookie => cookie.accepted = true)
          setCookieBar(json.cookie_bar)
          console.log(json.cookie_bar)
          setTimeout(() => {
            setHasCookieBar(true)
          }, 200);
        } else {
          setHasCookieBar(false)
        }
      })
   } catch (error) {
     console.error(error);
   }
  }

  const handleSubmit = () => {
    fetch('http://localhost:3333/api/v1/interactions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cookie_bar_id: cookieBar._id,
        ip_address: '192.168.1.100',
        timezone: 'Brazil',
        location: {
          city: 'Belo Horizonte',
          region: 'MG',
          country: 'Brazil',
        },
        position: {
          latitude: 1234,
          longitude: 4321,
        },
        cookie_list: cookieBar.cookie_list,
      })
    });
  }

  useEffect(() => {
    getCookieBar();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {hasCookieBar && (
        <>
          <View>
            <Text style={styles.title}>
              Categorias de cookies
            </Text>
          </View>

          {cookieBar.cookie_list.find(cookie => cookie.category === 'Needed') && (
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
                  disabled
                />
              </View>
              <Text style={styles.catDesc}>
                Os cookies necessários são absolutamente essenciais para o funcionamento adequado do site. Esses cookies garantem funcionalidades básicas e recursos de segurança do site, de forma anônima.
              </Text>
              <List.Accordion
                title="Mais detalhes"
                titleStyle={styles.acordionTitle}
              >
                {cookieBar.cookie_list
                  .filter(cookie => cookie.category === 'Needed')
                  .map(cookie => (
                    <View
                      key={`${cookie.name}-${cookie.domain}`}
                      style={styles.acordionItem}
                    >
                      <Text style={styles.acordionItemDesc}>{cookie.name}</Text>
                      <Text style={styles.acordionItemDesc}>{cookie.domain}</Text>
                    </View>
                ))}
              </List.Accordion>
            </View>
          )}

          {cookieBar.cookie_list.find(cookie => cookie.category === 'Functional') && (
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
                {cookieBar.cookie_list
                  .filter(cookie => cookie.category === 'Functional')
                  .map(cookie => (
                    <View
                      key={`${cookie.name}-${cookie.domain}`}
                      style={styles.acordionItem}
                    >
                      <Text style={styles.acordionItemDesc}>{cookie.name}</Text>
                      <Text style={styles.acordionItemDesc}>{cookie.domain}</Text>
                    </View>
                ))}
              </List.Accordion>
            </View>
          )}

          {cookieBar.cookie_list.find(cookie => cookie.category === 'Marketing') && (
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
                    Marketing
                  </Text>
                </View>
                <Switch
                  trackColor={{ false: "#929398", true: "#e95b2d80" }}
                  thumbColor={isMakEnabled ? "#e95b2dFF" : "#494949"}
                  backgroundColor={isMakEnabled ? "#e95b2dFF" : "#494949"}
                  ios_backgroundColor="#494949"
                  onValueChange={() => setIsMakEnabled(previousState => !previousState)}
                  value={isMakEnabled}
                />
              </View>
              <Text style={styles.catDesc}>
                Os cookies de Marketing ajudam a personalizar anúncios com base nos interesses dos usuários que são inferidos a partir do padrão de navegação.
              </Text>
              <List.Accordion
                title="Mais detalhes"
                titleStyle={styles.acordionTitle}
              >
                {cookieBar.cookie_list
                  .filter(cookie => cookie.category === 'Marketing')
                  .map(cookie => (
                    <View
                      key={`${cookie.name}-${cookie.domain}`}
                      style={styles.acordionItem}
                    >
                      <Text style={styles.acordionItemDesc}>{cookie.name}</Text>
                      <Text style={styles.acordionItemDesc}>{cookie.domain}</Text>
                    </View>
                ))}
              </List.Accordion>
            </View>
          )}

          {cookieBar.cookie_list.find(cookie => cookie.category === 'Analytics') && (
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
                    Estatísticos
                  </Text>
                </View>
                <Switch
                  trackColor={{ false: "#929398", true: "#e95b2d80" }}
                  thumbColor={isAnaEnabled ? "#e95b2dFF" : "#494949"}
                  backgroundColor={isAnaEnabled ? "#e95b2dFF" : "#494949"}
                  ios_backgroundColor="#494949"
                  onValueChange={() => setIsAnaEnabled(previousState => !previousState)}
                  value={isAnaEnabled}
                />
              </View>
              <Text style={styles.catDesc}>
                Os cookies estatísticos são aqueles que permitem quantificar o numero de visitantes e fazer uma analise estatística sobre usuários e serviços. Desta forma, os estudos e a navegação do site melhoraram o suprimento dos produtos ou serviços ofertados.
              </Text>
              <List.Accordion
                title="Mais detalhes"
                titleStyle={styles.acordionTitle}
              >
                {cookieBar.cookie_list
                  .filter(cookie => cookie.category === 'Analytics')
                  .map(cookie => (
                    <View
                      key={`${cookie.name}-${cookie.domain}`}
                      style={styles.acordionItem}
                    >
                      <Text style={styles.acordionItemDesc}>{cookie.name}</Text>
                      <Text style={styles.acordionItemDesc}>{cookie.domain}</Text>
                    </View>
                ))}
              </List.Accordion>
            </View>
          )}

          <Button
            onPress={handleSubmit}
            title="Salvar"
            color="#e95b2dff"
            accessibilityLabel="Salvar preferencias"
          />
        
        </>
      )}

      {!hasCookieBar && (
        <Text>This is an app</Text>
      )}
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
