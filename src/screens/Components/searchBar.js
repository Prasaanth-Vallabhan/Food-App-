import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = ({input,onInputChange,onTermSubmit}) => 
{
    return(
        <View style = {styles.backGroundStyle}>
            <Ionicons name = 'ios-search' style = {styles.iconStyle} />
            <TextInput
            autoCapitalize = 'none'
            autoCorrect = {false} 
            style = {styles.inputStyle} 
            placeholder = "Search"
            value = {input}
            onChangeText = {onInputChange}
            onEndEditing = {onTermSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    backGroundStyle: {
        backgroundColor: 'rgb(245,230,230)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 17
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 30
    }
});

export default SearchBar;