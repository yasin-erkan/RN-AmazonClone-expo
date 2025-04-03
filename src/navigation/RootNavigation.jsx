import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import {SCREENS} from '../utils/router';

const Stack = createNativeStackNavigator();

//!object destructuring

const {HOMESREEN, PRODUCTSCREEN} = SCREENS;

const RootNavigation = () => {
  //! screenOptions for screens in navigator, options for pages
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOMESREEN} component={HomeScreen} />
      <Stack.Screen name={PRODUCTSCREEN} component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
