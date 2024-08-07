
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { Screen2 } from './src/screen/Screen-2';
import { Screen1 } from './src/Screen-1';

const Stack = createStackNavigator(); 
const App = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Inicio" component={Screen1} options={{ title: 'Inicio' }} /> 
        <Stack.Screen name="Dividir" component={Screen2} options={{ title: 'Dividir' }} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}; 
 
export default App;