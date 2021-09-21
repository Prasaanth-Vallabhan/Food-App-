import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({title, results}) => {
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
                    return <ResultsDetails resultFinal = {item}/>
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

export default ResultsList;