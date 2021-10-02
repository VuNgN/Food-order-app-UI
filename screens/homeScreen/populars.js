import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors/colors'
import * as Font from 'expo-font';

export default ({ product, onPress }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Montserrat-SemiBold': {
                    uri: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
                    display: Font.FontDisplay.FALLBACK,
                },
                'Montserrat-Medium': {
                    uri: require('../../assets/fonts/Montserrat-Medium.ttf'),
                    display: Font.FontDisplay.FALLBACK,
                },
            });
            setFontsLoaded(true);
        }
        loadFonts()
    });
    return fontsLoaded ? (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.7}
            onPress={onPress}
        >
            <View style={styles.cartWrapper}>
                <View>
                    <View style={styles.trending}>
                        <MaterialCommunityIcons name='crown' color={colors.primary} size={12} />
                        <Text style={styles.trendingTitle}>top of the week</Text>
                    </View>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.weight}>Weight {product.weight}</Text>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.addCart} activeOpacity={0.7}>
                            <MaterialCommunityIcons name='plus' color={colors.darkText} size={15} />
                        </TouchableOpacity>
                        <View style={styles.ratingWrapper}>
                            <MaterialCommunityIcons name='star' color={colors.darkText} size={15} />
                            <Text style={styles.rating}>{product.rating}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.popularsImageWrapper}>
                    <Image style={styles.image} source={product.image} />
                </View>
            </View>
        </TouchableOpacity>
    ) : null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cartWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 25,
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
    },
    trending: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 25,
    },
    trendingTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.darkText,
        marginLeft: 10,
    },
    title: {
        marginLeft: 20,
        marginTop: 20,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.darkText,
    },
    weight: {
        marginLeft: 20,
        marginTop: 5,
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.lightText,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addCart: {
        backgroundColor: colors.primary,
        width: 90,
        height: 55,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.darkText,
        marginLeft: 5,
    },
    popularsImageWrapper: {
        marginLeft: 40,
    },
    image: {
        height: 125,
        width: 210,
        resizeMode: 'contain',
    }
});