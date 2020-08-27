import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function SettingScreen() {
    return(
        <View style={styles.container}>
            <Text>SettingScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingScreen;