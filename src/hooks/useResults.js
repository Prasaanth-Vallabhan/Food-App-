import { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (setTerm) => {
        try{
            console.log('Search Success')
            const response = await yelp.get('/search',{
                params: {
                limit: 50,
                location: 'san jose',
                term: setTerm
                }
            });

        setResults(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong');
        }
    };

   useEffect( () => {
       searchApi('arabic')
   }, [] );

   return[errorMessage, results, searchApi];

};