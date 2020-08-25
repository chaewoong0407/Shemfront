import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';


function Home({ navigation }) {
    return (
      <LinearGradient colors={['#00bfad', '#00efad', '#00ffb3']} style={styles.linearGradient}>
      <View style={styles.container}>
          <View style={styles.titleIcon}>
            <Text style={styles.title}>S</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.titleText}>우리집 전력 관리 앱</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => alert('로그인 버튼')}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => alert('회원가입 버튼')}>
              <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
          </View>
      </View>
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    titleIcon: {
      width: "33%",
      height: "17%",
      top: 120,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1FC87E',
      elevation: 20
    },
    title: {
      fontFamily: 'Roboto',
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 70,
    },
    titleText: {
      fontFamily: 'Roboto',
      color: '#FFFFFF',
      top: 8,
      fontWeight: 'bold',
      fontSize: 24,
    },
    button: {
      backgroundColor: '#1FC87E',
      width: 214,
      height: 68,
      borderRadius: 5,
      margin: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'Roboto',
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 21,
    },
    footer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
      flex: 1
    }
  });

  export default Home;