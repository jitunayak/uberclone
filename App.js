import React, {Component} from 'react';
import {SafeAreaView, Button, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';


function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <SafeAreaView>
                    <HomeScreen/>
                </SafeAreaView>
            </Provider>
        </SafeAreaProvider>

    );
}

export default App;

