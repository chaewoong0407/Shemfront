import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HomeScreen, WelcomeScreen }from './screens';



const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ gestureDirection: 'horizontal'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ gestureDirection: 'horizontal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;