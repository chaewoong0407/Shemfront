import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


function MainScreen({ navigation }) {
    return(
        <>
        <View style={styles.container}>
            <Image source={require('../../../assets/images/human.png')} style={{  top: 32, right: 130}}/>
            <Text style={{ color: '#2EBF80', fontWeight: 'bold', fontSize: 20, bottom: 20, right: 10}}>안채웅님의 SHEM</Text>
            <Text style={{ color: '#A5A5A5', fontWeight: 'normal', fontSize: 12, bottom: 20, right: 38}}>우리집 정보 보기</Text>
            <TouchableOpacity style={styles.Manager} onPress={() => navigation.push('AIManager')}>
                <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold'}}>AI 매니저</Text>
            </TouchableOpacity> 
            <View style={{ width: 300, borderColor: '#CDCDCD', borderWidth: 1, bottom: 15}}/>
        </View>
        <View style={styles.body}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , bottom: 20, right: 95}}>SHEM의 분석</Text>
            <View style={{ flex: 1 }}>
                <View style={styles.Circle}>
                    <Image source={require('../../../assets/images/lightning.png')}/>
                </View>
                <Text style={{ bottom: 50, right: 30, fontSize: 12 }}>현재 전력량</Text>
                <Text style={{ bottom: 50, right: 30, fontSize: 20, color: '#2A774D' }}>364.56 kwh</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={[styles.Circle, { right: 114 }]}>
                    <Image source={require('../../../assets/images/money.png')}/>
                </View>
                <Text style={{ bottom: 50, right: 44, fontSize: 12 }}>예상 요금</Text>
                <Text style={{ bottom: 50, right: 44, fontSize: 20, color: '#2A774D' }}>67,135 원</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={[styles.Circle, { right: 90}]}>
                    <Image source={require('../../../assets/images/t_money.png')}/>
                </View>
                <Text style={{ bottom: 50, right: 20, fontSize: 12 }}>현재 전력량</Text>
                <Text style={{ bottom: 50, right: 20, fontSize: 20, color: '#2A774D' }}>14,234 원 남음</Text>
            </View>
            <TouchableOpacity style={{ width: 50, height: 30, bottom: 345, left: 120, borderRadius: 15
                , alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color: '#8D8D8D', fontSize: 12, fontWeight: 'bold' }}>더보기</Text>
            </TouchableOpacity>
            <View style={{ width: 300, borderColor: '#CDCDCD', borderWidth: 1, bottom: 15}}/>
        </View>
        <View style={styles.footer}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 , right: 120 }}>CCTV</Text>
            <View style={{ flex: 1 }}>
                <View style={[styles.Circle, { top: 20, right: 80}]}>
                    <Image source={require('../../../assets/images/security-camera.png')}/>
                </View>
                <Text style={{ bottom: 35, right: 10, fontSize: 12 }}>보안캠</Text>
                <Text style={{ bottom: 35, right: 10, fontSize: 20, color: '#2A774D' }}>캡쳐된 사진 없음</Text>
                <TouchableOpacity style={{ width: 50, height: 30, bottom: 73, left: 170, backgroundColor: '#41A07C', borderRadius: 5
                , alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>캠확인</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Manager: {
        bottom: 60,
        left: 132,
        width: 69,
        height: 37,
        borderRadius: 15,
        backgroundColor: '#41A07C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Circle: {
        backgroundColor: '#A2E4CB',
        width: 60,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        right: 100
    }
});

export default MainScreen;