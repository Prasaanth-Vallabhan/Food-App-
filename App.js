import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import searchScreen from "./src/screens/searchScreen";
import ResultSearchData from "./src/screens/ResultSearchData";

const navigator = createStackNavigator (
  {
    search: searchScreen,
    result: ResultSearchData
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: 
    {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);