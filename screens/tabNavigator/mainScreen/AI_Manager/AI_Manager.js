import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

function AI_Manger({ navigation }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 25, backgroundColor: '#41A07C', top: 20
                , alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.goBack()}>
                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}>뒤로 가기</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: '500', top: 40}}>AI 매니저를 불러보세요!</Text>
            <Image source={require('../../../../assets/images/AI.png')} style={{ width: 180, height: 180, top: 90}}/>
            <Text style={{ fontSize: 18, fontWeight: '500', top: 120, color: '#707070'}}>제가 할 수 있는 것들이예요 :)</Text>
            <View style={{ flex: 1, flexDirection: "row", top: 180}}>
            <View style={styles.box}>
                <View style={{ width: 40, height: 40, elevation: 5, borderRadius: 40, backgroundColor: '#FFFFFF', alignItems: 'center',
                    justifyContent: 'center', margin: 5 }}>
                    <Image source={require('../../../../assets/images/light.png')}/>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 4}}>조명 온오프</Text>
                <Text style={{ fontSize: 10 }}>거실 불 꺼줘</Text>
                <Text style={{ fontSize: 10 }}>부엌 불 켜줘</Text>
            </View>
            <View style={styles.box}>
                <View style={{ width: 40, height: 40, elevation: 5, borderRadius: 40, backgroundColor: '#FFFFFF', alignItems: 'center',
                    justifyContent: 'center', margin: 5 }}>
                    <Image source={require('../../../../assets/images/weather.png')}/>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 4}}>우리동네 날씨</Text>
                <Text style={{ fontSize: 10 }}>날씨 알려줘</Text>
                <Text style={{ fontSize: 10 }}>오늘 날씨 어때</Text>
            </View>
            <View style={styles.box}>
                <View style={{ width: 40, height: 40, elevation: 5, borderRadius: 40, backgroundColor: '#FFFFFF', alignItems: 'center',
                    justifyContent: 'center', margin: 5 }}>
                    <Image source={require('../../../../assets/images/Home.png')}/>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 4}}>전기요금 예측</Text>
                <Text style={{ fontSize: 10 }}>전기 사용량 알려줘</Text>
                <Text style={{ fontSize: 10 }}>전기요금 얼마야</Text>
            </View>
            </View>
            <Image source={require('../../../../assets/images/Line.png')} style={{ width: 409, height: 80, top: 35}}/>
            <TouchableOpacity style={{ backgroundColor: '#5EE4B1', width: 85, height: 85, borderRadius: 50, bottom: 60, alignItems: 'center',
                    justifyContent: 'center', elevation: 5 }}>
                <Image source={require('../../../../assets/images/mic.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 120,
        height: 140,
        backgroundColor: '#F3F3F3',
        elevation: 5,
        borderRadius: 5,
        bottom: 30,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AI_Manger;