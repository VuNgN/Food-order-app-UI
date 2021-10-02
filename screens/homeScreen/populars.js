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
        <TouchableOpacity style={styles.shadow} activeOpacity={0.7}>
            <View>
                <Text>
                    popular
                </Text>
            </View>
        </TouchableOpacity>
    ) : null;
}

const styles = StyleSheet.create({
    
});