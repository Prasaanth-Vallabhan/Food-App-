import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from './Components/ResultsList';
import SearchBar from './Components/searchBar';

const searchScreen = () => 
{
    const [input,setInput] = useState('');
    const [errorMessage, results, searchApi] = useResults();

    const filterByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        });
    }

    return(
        <View style = {{flex: 1}}>
            <SearchBar 
            input = {input} 
            onInputChange = {setInput}
            onTermSubmit = {() => searchApi(input)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList results = {filterByPrice('$')} title = "Cost Effective"/>
            <ResultsList results = {filterByPrice('$$')} title = "Bit Pricier"/>
            <ResultsList results = {filterByPrice('$$$')} title = "Big Spender"/>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({});

export default searchScreen;