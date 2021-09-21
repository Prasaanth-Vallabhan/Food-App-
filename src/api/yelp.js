import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer R5DHLNh4mF5GT5B7-5ETJwqwUa8AzMO9BeM0zpnj5SQSsGXbNSnDwbTqffq5kHpB1hV7p9grtbcXN1PeAxLqrP4nDjkrFN6OxRvd0g9XbMhz2ob7VH0fXMldRG9BYXYx'
    }
});