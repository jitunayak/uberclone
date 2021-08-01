import React, {Component} from 'react';
import {SafeAreaView, Button, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './src/screens/MapScreen';

function App() {
    const Stack = createStackNavigator();

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="HomeScreen" component={HomeScreen}
                                      options={{
                                          headerShown: false,
                                      }}/>
                        <Stack.Screen name="MapScreen" component={MapScreen}
                                      options={{
                                          headerShown: false,
                                      }}/>
                        <Stack.Screen name="FoodScreen" component={MapScreen}
                                      options={{
                                          headerShown: false,
                                      }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>

    );
}

export default App;

