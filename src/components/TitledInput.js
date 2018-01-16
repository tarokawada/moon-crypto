import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 2,
        color: '#4a4a4a',
        fontFamily: 'agane55',
        fontSize: 14,
        fontWeight: '200',
        flex: 1,
        height: 37,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        marginBottom: 6,
        borderRadius: 3
    },
    labelStyle: {
        fontSize: 12,
        color: '#7F7D7D',
        fontWeight: '200',
        flex: 1
    },
    containerStyle: {
        height: 45,
        flexDirection: 'column',
         alignItems: 'flex-start',
         width: '100%',
    }
};

export default TitledInput