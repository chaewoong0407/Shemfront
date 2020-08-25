import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function WelcomeFare() {
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}
function Welcome({ navigation }) {
    return (
        <View style={styles.cotainer} onTouchEnd={() => navigation.push('Home')}>
            <View style={[styles.bigCircle, { top: 90, left: 140}]}/>
            <View style={[styles.bigCircle, { top: 50, left: 100}]}/>
            <View style={[styles.middleCircle, { top: -210, left: 60}]}/>
            <View style={[styles.smallCircle, { top: -210, left: 200}]}/>
            <View style={styles.content}>
                <View style={styles.lorem}>
                    <View style={styles.tinyCircle}/>
                    <Text style={styles.contentText}>lorem is loasczrw</Text>
                </View>
                <View style={[styles.lorem, { elevation: 4 }]}>
                    <View style={[styles.tinyCircle, { backgroundColor: '#BEBDBD' }]}/>
                    <Text style={styles.contentText}>lorem is loasczrw</Text>
                </View>
                <View style={styles.lorem}>
                    <View style={styles.tinyCircle}/>
                    <Text style={styles.contentText}>lorem is loasczrw</Text>
                </View>
                <View style={styles.lorem}>
                    <View style={styles.tinyCircle}/>
                    <Text style={styles.contentText}>lorem is loasczrw</Text>
                </View>
            </View>
            {/* <TouchableOpacity style={styles.arrow} onPress={() => navigation.push('Home')}></TouchableOpacity> */}
            <Image style={styles.ImageIcon} source={require('../../assets/images/AI.png')}/>
            <View style={styles.welcomeText}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', marginBottom: 10}}>AI를 이용한 우리집 매니저</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#9B9B9B'}}>AI 매니저를 통해서 우리집의 전력</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#9B9B9B'}}>시스템을 통제할 수 있습니다</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        width: 151,
        height: 195,
        bottom: 550,
        left: 100,
        borderRadius: 15,
        elevation: 20,
        backgroundColor: '#FFFFFF'
    },
    lorem: {
        flex: 1,
        flexDirection: 'row'
    },
    contentText: {
        fontSize: 7,
        top: 10,
        left: 15,
        color: '#C0C0C0'
    },
    bigCircle: {
        backgroundColor: '#F1F1F1',
        width: 209,
        height: 209,
        borderRadius: 110
    },
    middleCircle: {
        backgroundColor: '#F1F1F1',
        width: 173,
        height: 173,
        borderRadius: 90
    },
    smallCircle: {
        backgroundColor: '#F1F1F1',
        width: 141,
        height: 141,
        borderRadius: 70
    },
    tinyCircle: {
        backgroundColor: '#F1F1F1',
        width: 28,
        height: 28,
        top: 10,
        left: 10,
        borderRadius: 56
    },
    ImageIcon: {
        bottom: 550,
        left: 255,
        height: 98,
        width: 98,
        resizeMode:'cover'
    },
    welcomeText: {
        flex: 1,
        flexDirection: 'column',
        bottom: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        transform:[
            {rotate:'45deg'}
        ],
        borderStyle: 'solid',
        width:25,
        height:25,
        left: 370,
        backgroundColor:'#FFFFFF',
        marginTop:-4,
        borderColor: '#C1C1C1',
        borderTopWidth: 4,
        borderRightWidth: 4,
        bottom: 560
    }
});

export default Welcome;