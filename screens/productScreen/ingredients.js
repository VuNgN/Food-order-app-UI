import React from 'react';
import { View, Image } from 'react-native';
import colors from '../../assets/colors/colors';


export default ({ ingredient, index }) => {
    return (
        <View style={{
            width: 100,
            height: 80,
            borderRadius: 15,
            backgroundColor: colors.white,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            marginBottom: 5,
            marginTop: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: index === 0 ? 20 : 0,
            marginRight: 15,
        }}>
            <Image style={{
                height: 80,
                width: 80,
                resizeMode: 'contain',
            }}
                source={ingredient.image} />
        </View>
    );
}