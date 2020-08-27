import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ControlScreen() {
    return(
        <View style={styles.container}>
            <Text>ControlScreen</Text>
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

export default ControlScreen;