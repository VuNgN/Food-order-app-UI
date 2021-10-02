import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import producScreen from '../screens/productScreen/producScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={producScreen} />
      </Stack.Navigator>
  );
}

export default App;