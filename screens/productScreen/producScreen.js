import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView, StyleSheet, Alert } from "react-native";
import colors from '../../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Font from 'expo-font';
import Ingredients from './ingredients';


export default ({ route, navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Montserrat-SemiBold': {
                    uri: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
                    display: Font.FontDisplay.FALLBACK,
                },
                'Montserrat-Bold': {
                    uri: require('../../assets/fonts/Montserrat-Bold.ttf'),
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
    const { product } = route.params;
    return fontsLoaded ? (
        <ScrollView 
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            <SafeAreaView style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons name='chevron-left' color={colors.darkText} size={15} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.starButton} activeOpacity={0.7}>
                    <MaterialCommunityIcons name='star' color={colors.white} size={15} />
                </TouchableOpacity>
            </SafeAreaView>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.info}>
                <View style={styles.description}>
                    <Text style={styles.descriptionTitle}>Size</Text>
                    <Text style={styles.descriptionContent}>{product.sizeName} {product.sizeNumber}"</Text>
                    <Text style={[styles.descriptionTitle, { marginTop: 20 }]}>Crust</Text>
                    <Text style={styles.descriptionContent}>{product.crust}</Text>
                    <Text style={[styles.descriptionTitle, { marginTop: 20 }]}>Delivery in</Text>
                    <Text style={styles.descriptionContent}>{product.deliveryTime} min</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={product.image} />
                </View>
            </View>
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsText}>Ingredients</Text>
                <FlatList
                    style={styles.ingredients}
                    data={product.ingredients}
                    renderItem={({ item }) => <Ingredients ingredient={item} key={item.id} />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <TouchableOpacity 
                style={styles.orderButton} 
                activeOpacity={0.7} 
                onPress={() => 
                    { 
                        Alert.alert(
                            'Ordered !', 
                            'Bon Appétit', 
                            [
                                {
                                    text: "OK" 
                                }
                            ]
                        ) 
                    }
                }
            >
                <Text style={styles.orderText}>Place an order</Text>
                <MaterialCommunityIcons style={styles.orderIcon} name='chevron-right' color={colors.darkText} size={20} />
            </TouchableOpacity>
        </ScrollView>
    ) : null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    backButton: {
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.lightText,
        alignItems: 'center',
        justifyContent: 'center',
    },
    starButton: {
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        width: '50%',
        color: colors.darkText,
        paddingLeft: 20,
        marginTop: 30,
    },
    price: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 32,
        paddingLeft: 20,
        color: colors.secondary,
        marginTop: 20,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 30,
    },
    description: {

    },
    descriptionTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.lightText,
    },
    descriptionContent: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.darkText,
        marginTop: 5,
    },
    imageWrapper: {
        marginLeft: 25,
    },
    image: {
        width: 295,
        height: 175,
        resizeMode: 'contain',
    },
    ingredientsWrapper: {
        marginTop: 45,
    },
    ingredientsText: {
        marginLeft: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.darkText,
    },
    ingredients: {
        marginTop: 20,
    },
    orderButton: {
        flexDirection: 'row',
        width: 330,
        height: 60,
        borderRadius: 50,
        backgroundColor: colors.primary,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 60,
    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: colors.darkText,
        marginRight: 10,
    },
    orderIcon: {
        marginTop: 3,
    },
})