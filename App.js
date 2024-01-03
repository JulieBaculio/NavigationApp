import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import SigninPage from './components/pages/SigninPage';
import HomePage from './components/pages/HomePage';
import AccountRecoveryPage from './components/pages/AccountRecoveryPage'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Landing" component={LandingPage}/>
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginPage}/>
            <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninPage}/>
            <Stack.Screen options={{headerShown: false}} name="Homepage" component={HomePage}/>
            <Stack.Screen options={{headerShown: false}} name="Accountrecovery" component={AccountRecoveryPage}/>
          </Stack.Navigator>
     </NavigationContainer>

  );
}

