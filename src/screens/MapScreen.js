import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env';
import tw from 'tailwind-react-native-classnames';

function MapScreen() {
    return (
        <View style={tw`mt-5`}>
            <GooglePlacesAutocomplete
                fetchDetails={true}
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 20,
                    },
                }}
                enablePoweredByContainer={false}
                minLength={4}
                debounce={400}
                placeholder="Where from ?"
                query={{
                    key: GOOGLE_MAPS_KEY,
                    language: 'en',
                }}
            />
        </View>
    );

}

export default MapScreen;
