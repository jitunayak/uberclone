import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import MapScreen from './MapScreen';

function HomeScreen() {

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}}
                       source={{uri: 'https://links.papareact.com/gzs'}}/>
                <MapScreen/>
                <NavOptions/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
