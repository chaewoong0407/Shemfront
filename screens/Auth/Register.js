import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function Login({ navigation }) {
    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.pop()}><Image source={require('../../assets/images/back.png')}/></TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: '500', right: 110}}>회원가입</Text>   
        </View>
        <View style={styles.body}>
            <TextInput style={styles.input} placeholder="이름을 입력해 주세요." placeholderTextColor="#868686"></TextInput>
            <TextInput style={styles.input} placeholder="이메일을 입력해 주세요." placeholderTextColor="#868686"></TextInput> 
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('SubRegister')}>
                <Text style={{ fontSize: 20, color: '#009420', fontWeight: '500' }}>계속하기</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        margin: 15,
        width: 350,
        height: 40,
        borderColor: "#868686",
        borderBottomWidth: 1
      },
    loginButton: {
        width: 330,
        height: 64,
        backgroundColor: '#FFFFFF',
        borderWidth: 3,
        borderColor: '#2EBF80',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        right: 170,
        bottom: 60,
        resizeMode: 'cover'
    },
});

export default Login;