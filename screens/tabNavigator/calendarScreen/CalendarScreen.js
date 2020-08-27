import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function CalendarScreen() {
    return(
        <View style={styles.container}>
            <Text>CalendarScreen</Text>
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

export default CalendarScreen;