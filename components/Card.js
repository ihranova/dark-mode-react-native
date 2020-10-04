import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button, Switch } from 'react-native';
import { ThemeContext } from '../theme/theme-context';

const Card = () => {
    const { dark, theme, toggle } = useContext(ThemeContext);

    return (
        <View style={[styles.container,{ backgroundColor: theme.backgroundColor }]} >
             <View style = {styles.containerSwitch}>
                 <Switch 
                 trackColor={{ false: "#767577", true: "#ccc" }}
                 thumbColor={dark ? "#fff" : "#f4f3f4"}
                 onChange={toggle} value = {dark} />
             </View>
            <View style={[styles.containerCard, { backgroundColor: theme.backgroundCard }]}>
                <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1575908906110-6be79061f273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80' }} />
                <Text adjustsFontSizeToFit={true} style={[styles.text, { color: theme.color }]}>Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science.</Text>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSwitch:{
        marginBottom:50,
    },
    containerCard: {
        width: Dimensions.get('window').width - 50,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        padding: 20,
    },
    img: {
        width: Dimensions.get('window').width - 50,
        height: 240,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
});
