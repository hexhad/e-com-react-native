import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart, Profile } from "../screens";
import { ROUTES } from "../constraints";
import ProductNavigation from './ProductNavigation';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name={ROUTES.PRODUCS_NAV} component={ProductNavigation} />
      <Tab.Screen name={ROUTES.CART} component={Cart} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}