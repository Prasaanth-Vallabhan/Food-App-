import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({title, results, navigation}) => {

    if(!results.length)
    {
        return null;
    }
    return(
        <View style = {{marginBottom: 10}}>
            <Text style = {styles.titleDesign}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                horizontal = {true}
                data = {results}
                keyExtractor = { result => {result.id} }
                renderItem = { ( {item} ) => {
                    return (
                        <TouchableOpacity 
                        onPress = { () => navigation.navigate('result', { id: item.id } ) }>
                            <ResultsDetails resultFinal = {item}/>
                        </TouchableOpacity>
                    )
                } }
            />
        </View>
    );
}


const styles = StyleSheet.create({
    titleDesign: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);