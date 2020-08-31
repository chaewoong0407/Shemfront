import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, WelcomeScreen, WelcomeFareScreen, InformationScreen, LoginScreen, RegisterScreen, SubRegisterScreen, TabNavigatorScreen, AI_Manager, AI_Help }from './screens';



const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="WelcomeFare" component={WelcomeFareScreen}/>
        <Stack.Screen name="WelcomeInfor" component={InformationScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="SubRegister" component={SubRegisterScreen}/>
        <Stack.Screen name="TabNavigator" component={TabNavigatorScreen}/>
        <Stack.Screen name="AIManager" component={AI_Manager}/>
        <Stack.Screen name="AIHelp" component={AI_Help}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;