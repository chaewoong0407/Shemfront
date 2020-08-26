import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Information({ navigation }){
    return(
        <View style={styles.container} onTouchEnd={() => navigation.push('Home')}>
            <Image style={styles.VectorIcon} source={require('../../assets/images/Vector.png')}/>
            <Image style={styles.ImageIcon} source={require('../../assets/images/cctv.png')}/>
            <View style={styles.welcomeText}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', marginBottom: 10}}>범죄 예방을 위한 실시간 정보 알림</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#9B9B9B'}}>우리집에 누가 들어왔는지 캠을 통해</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#9B9B9B'}}>실시간으로 사용자에게 전해집니다</Text>
            </View>
            <View style={styles.circleIcon}>
                <View style={styles.contentIcon}/>
                <View style={styles.contentIcon}/>
                <View style={[styles.contentIcon, { backgroundColor: '#84E8A6' }]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    VectorIcon: {
        width: 277.46,
        height: 339.32,
        top: 140,
        resizeMode:'cover'
    },
    ImageIcon: {
        bottom: 210,
        left: 40,
        resizeMode: 'cover'
    },
    welcomeText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIcon: {
        flexDirection: 'row',
        flex: 1,
        top: 52,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentIcon: {
        backgroundColor: '#E2E2E2',
        width: 10,
        height: 10,
        margin: 3,
        borderRadius: 30
    }
});

export default Information;