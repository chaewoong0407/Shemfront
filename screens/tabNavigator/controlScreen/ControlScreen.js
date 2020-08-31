import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Switch } from 'react-native-switch';


function ControlScreen() {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [isEnabled2, setIsEnabled2] = React.useState(false);
    const [isEnabled3, setIsEnabled3] = React.useState(false);
    const [isEnabled4, setIsEnabled4] = React.useState(false);
    const [isEnabled5, setIsEnabled5] = React.useState(false);
    const [isEnabled6, setIsEnabled6] = React.useState(false);
    const [isEnabled7, setIsEnabled7] = React.useState(false);
    const [isButton1, setIsButton1] = React.useState(false);
    const [isButton2, setIsButton2] = React.useState(false);
    const [isButton3, setIsButton3] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
    const toggleSwitch7 = () => setIsEnabled7(previousState => !previousState);

    const changeButton = (num) => {
        switch(num) {
            case 1:
                setIsButton1(true);
                setIsButton2(false);
                setIsButton3(false);
                break;
            case 2:
                setIsButton1(false);
                setIsButton2(true);
                setIsButton3(false);
                break;
            case 3:
                setIsButton1(false);
                setIsButton2(false);
                setIsButton3(true);
                break;
        }
    }

    return(
        <>
        <View style={styles.container}>
            <Text style={{ color: '#2EBF80', fontSize: 24, fontWeight: 'bold', right:90 }}>현재 우리집은?</Text>
        </View>
        <View style={styles.mainSwitch}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#40805A', marginRight: 90}}>절전모드</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#40805A', marginLeft: 10}}>여행모드</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1,  height: 35, backgroundColor: isButton1 ? '#82CA96' : '#C4C4C4', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginRight: 10, marginLeft: 30 }} onTouchEnd={() => changeButton(1)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFFFFF' }}>초절전</Text>
                </View>
                <View style={{ flex: 1,  height: 35, backgroundColor: isButton2 ? '#82CA96' : '#C4C4C4', borderRadius: 30, justifyContent: 'center'
                        , alignItems: 'center',  marginRight: 10 }} onTouchEnd={() => changeButton(2)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFFFFF' }}>절전</Text>
                </View>
                <View style={{ flex: 1,  height: 35, backgroundColor: isButton3 ? '#82CA96' : '#C4C4C4', borderRadius: 30, justifyContent: 'center'
                        , alignItems: 'center',  marginRight: 10 }} onTouchEnd={() => changeButton(3)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFFFFF' }}>일반</Text>
                </View>
                <View style={{ flex: 3,  height: 35, justifyContent: 'center'
                        , alignItems: 'center',  marginRight: 45 }}>
                            <Switch
                            value={isEnabled}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch}
                        />
                </View>
            </View>
        </View>
        <View style={styles.lightSwitch}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: '#B3B3B3', fontSize: 20, right: 150 }}>전등</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/t_money.png')} style={{marginRight: 8}}/>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5}}>거실</Text>
                        </View>
                        <View style={{ width: 116, borderWidth: 1, borderColor: '#C1C1C1'}}/>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch
                            value={isEnabled2}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch2}
                            />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/t_money.png')} style={{marginRight: 8}}/>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5}}>부엌</Text>
                        </View>
                        <View style={{ width: 116, borderWidth: 1, borderColor: '#C1C1C1'}}/>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch
                            value={isEnabled3}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch3}
                            />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/t_money.png')} style={{marginRight: 8}}/>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5}}>몰라</Text>
                        </View>
                        <View style={{ width: 116, borderWidth: 1, borderColor: '#C1C1C1'}}/>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch
                            value={isEnabled4}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch4}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
        <View style={styles.HomeSwitch}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: '#B3B3B3', fontSize: 20, right: 140 }}>가전제품</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/t_money.png')} style={{marginRight: 8}}/>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5}}>가습기 </Text>
                        </View>
                        <View style={{ width: 116, borderWidth: 1, borderColor: '#C1C1C1'}}/>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch
                            value={isEnabled5}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch5}
                            />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/t_money.png')} style={{marginRight: 8}}/>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5}}>부엌</Text>
                        </View>
                        <View style={{ width: 116, borderWidth: 1, borderColor: '#C1C1C1'}}/>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch
                            value={isEnabled6}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch6}
                            />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/t_money.png')} style={{marginRight: 8}}/>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5}}>몰라</Text>
                        </View>
                        <View style={{ width: 116, borderWidth: 1, borderColor: '#C1C1C1'}}/>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch
                            value={isEnabled7}
                            disabled={false}
                            activeText={'ON'}
                            inActiveText={'OFF'}
                            backgroundActive={'#C4C4C4'}
                            backgroundInactive={'#C4C4C4'}
                            circleActiveColor={'#82CA96'}
                            circleInActiveColor={'#E35148'}
                            onValueChange={toggleSwitch7}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSwitch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightSwitch: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HomeSwitch: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: 116, 
        height: 130, 
        backgroundColor: '#F3F3F3', 
        elevation: 5, 
        borderRadius: 5,
        margin: 20
    }
});

export default ControlScreen;