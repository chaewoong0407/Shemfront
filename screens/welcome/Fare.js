import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function WelcomeFare({ navigation }) {
    return(
        <View style={styles.container} onTouchEnd={() => navigation.push('WelcomeInfor')}>
            <View style={[styles.bigCircle, { top: 120, left: 130 }]}/>
            <View style={[styles.middleCircle, { left: 70 }]}/>
            <View style={styles.phone}>
                <View style={{ width: 25, height: 25, backgroundColor: "#F1F1F1", borderRadius: 40, top: 299 }}></View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, marginBottom: 20}}>내 사용량</Text>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginBottom: 20}}>7월 31일</Text>
                <View style={{ backgroundColor: '#E9E9E9', borderRadius: 8, width: 107, height: 60}}>
                    <Text style={{ textAlign: 'center', top: 10, fontWeight: 'bold', fontSize: 10, marginBottom: 9}}>사용량 : 13,002 KW</Text>
                    <Text style={{ textAlign: 'center', top: 10, fontWeight: 'bold', fontSize: 10}}>전기세 : 23,000 원</Text>
                    <Image style={styles.ImageIcon} source={require('../../assets/images/graph.png')}/>
                </View>
            </View>
            <View style={{ width: 165, height: 8, borderRadius: 30, bottom: 330,left: 107, backgroundColor: '#DDDDDD' }}/>
            <View style={styles.welcomeText}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', marginBottom: 10}}>내가 쓴 사용량과 전기요금을 한번에!</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#9B9B9B'}}>데이터를 사용자가 편히 볼 수 있게끔</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#9B9B9B'}}>그래프와 수치로 계산합니다</Text>
            </View>
            <View style={styles.circleIcon}>
                <View style={styles.contentIcon}/>
                <View style={[styles.contentIcon, { backgroundColor: '#84E8A6' }]}/>
                <View style={styles.contentIcon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    bigCircle: {
        backgroundColor: '#F1F1F1',
        width: 254,
        height: 254,
        borderRadius: 120
    },
    middleCircle: {
        backgroundColor: '#F1F1F1',
        width: 186,
        height: 186,
        borderRadius: 95
    },
    phone: {
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 12,
        borderRightWidth: 12,
        borderTopWidth: 25,
        borderBottomWidth: 35,
        borderColor: '#2EBF80',
        width: 178,
        height: 354,
        borderRadius: 30,
        bottom: 335,
        left: 100,
        alignItems: 'center'
    },
    ImageIcon: {
        height: 80,
        width: 131,
        top: 50,
        right: 13,
        resizeMode:'cover'
    },
    welcomeText: {
        flex: 1,
        flexDirection: 'column',
        bottom: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIcon: {
        flexDirection: 'row',
        flex: 1,
        bottom: 25,
        left: 160,
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

export default WelcomeFare;