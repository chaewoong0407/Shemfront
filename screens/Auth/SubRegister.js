import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function Login({ navigation }) {
    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}><Image source={require('../../assets/images/back.png')}/></TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: '500', right: 110}}>회원가입</Text>   
        </View>
        <View style={styles.body}>
            <TextInput style={styles.input} placeholder="비밀번호를 입력해 주세요." placeholderTextColor="#868686"></TextInput>
            <TextInput style={styles.input} placeholder="비밀번호 재입력" placeholderTextColor="#868686"></TextInput> 
            <TextInput style={styles.input} placeholder="생년월일을 입력해주세요." placeholderTextColor="#868686"></TextInput>
            <TextInput style={styles.input} placeholder="닉네임을 입력해주세요." placeholderTextColor="#868686"></TextInput>  
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('TabNavigator')}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '500' }}>시작하기</Text>
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
        backgroundColor: '#2EBF80',
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