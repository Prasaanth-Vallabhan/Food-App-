import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetails = ({resultFinal}) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {{uri: resultFinal.image_url}}/>
            <Text style = {styles.restoDeets}>{resultFinal.name}</Text>
            <Text>Ratings: {resultFinal.rating} Stars, Reviews: {resultFinal.review_count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 5
    },
    restoDeets: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default ResultsDetails;
