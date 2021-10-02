import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import colors from '../../assets/colors/colors'
import * as Font from 'expo-font';

export default ({ category }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Montserrat-SemiBold': {
                    uri: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
                    display: Font.FontDisplay.FALLBACK,
                },
            });
            setFontsLoaded(true);
        }
        loadFonts()
    });
    return fontsLoaded ? (
        <TouchableOpacity style={[styles.container, { backgroundColor: category.selected ? colors.primary : colors.white }]} activeOpacity={0.7}>
            <Image style={styles.image} source={category.image} />
            <Text style={styles.title}>{category.title}</Text>
            <View style={[styles.icon, { backgroundColor: category.selected ? colors.white : colors.secondary }]}>
                <FontAwesome5 name='chevron-right' color={category.selected ? colors.black : colors.white} size={8} />
            </View>
        </TouchableOpacity>
    ) : null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        width: 105,
        alignItems: 'center',
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
        marginTop: 5,
    },
    image: {
        height: 60,
        width: 60,
        marginTop: 25,
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginTop: 10,
    },
    icon: {
        height: 26,
        width: 26,
        borderRadius: 26,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
});