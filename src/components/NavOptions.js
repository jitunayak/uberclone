import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const data = [
    {
        id: '1',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    }
    , {
        id: '2',
        title: 'Order your Food',
        image: 'https://links.papareact.com/28w',
        screen: 'FoodScreen',
    },
];

function NavOptions() {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)}
                                  style={tw`rounded-lg bg-gray-200 p-2 m-2 w-40 flex justify-between`}>
                    <Image source={{uri: item.image}} style={{height: 120, width: 120, resizeMode: 'contain'}}/>
                    <Text style={tw`text-lg font-semibold p-1`}>{item.title}</Text>
                    <Icon
                        raised
                        name="arrow-right"
                        type="font-awesome"
                        color="#f50"
                    />
                </TouchableOpacity>
            )}/>
    );

}

export default NavOptions;
