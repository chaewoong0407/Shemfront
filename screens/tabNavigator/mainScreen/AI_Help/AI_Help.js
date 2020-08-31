import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, ImageEditor } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

function AI_Help({ navigation }) {
    return (
        <LinearGradient colors={['#00bfad', '#00efad', '#00ffb3']} style={styles.linearGradient}>
            <View style={styles.container}>
                <Image source={require('../../../../assets/images/AI.png')} style={{ width: 160, height: 160 }}/>
                <TouchableOpacity style={{ bottom: 250, left: 170 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/images/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 25, bottom: 150}}>무엇을 도와드릴까요?</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    linearGradient: {
        flex: 1
      }
});

export default AI_Help;