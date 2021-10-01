import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, SafeAreaView, FlatList, StyleSheet } from "react-native";
import colors from '../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather'
import * as Font from 'expo-font';
import categoriesData from '../../assets/data/categoriesData';
import Categories from './categories';


export default () => {
    const [searchValueInput, onChangeSearchValue] = useState(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                // Any string can be used as the fontFamily name. Here we use an object to provide more control
                'Montserrat-Regular': {
                    uri: require('../../assets/fonts/Montserrat-Regular.ttf'),
                    display: Font.FontDisplay.FALLBACK,
                },
                'Montserrat-Bold': {
                    uri: require('../../assets/fonts/Montserrat-Bold.ttf'),
                    display: Font.FontDisplay.FALLBACK,
                },
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
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Image style={styles.profileImg} source={require('../../assets/images/profile.png')} />
                <Feather style={styles.menuIcon} name='menu' color={colors.darkText} size={24} />
            </SafeAreaView>
            <Text style={styles.headerText}>Food</Text>
            <Text style={styles.h1Title}>Delivery</Text>
            <View style={styles.searchWrapper}>
                <Feather style={styles.searchIcon} name='search' color={colors.darkText} size={16} />
                <TextInput
                    style={styles.searchInput}
                    onChangeText={onChangeSearchValue}
                    value={searchValueInput}
                    placeholder=' Search...'
                    placeholderTextColor={colors.lightText}
                />
            </View>
            <Text style={styles.h2Title}>Categories</Text>
            <FlatList
                style={styles.categories}
                data={categoriesData}
                renderItem={({ item }) => <Categories category={item} key={item.id} />}
                keyExtractor={item => item.id}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 40,

    },
    menuIcon: {
        marginLeft: 'auto',
    },
    headerText: {
        marginTop: 30,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    h1Title: {
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
    searchWrapper: {
        marginTop: 36,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        borderBottomColor: colors.lightText,
        borderBottomWidth: 2,
        flex: 1,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    h2Title: {
        marginTop: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    categories: {
        marginTop: 15,
        marginHorizontal: -20,
        paddingHorizontal: 20
    },
})