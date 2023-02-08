import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Product, Profile } from "../screens";
import { ROUTES } from "../constraints";
import CartNavigation from './CartNavigation';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.PRODUCTS} component={Product} />
      <Tab.Screen name={ROUTES.CARTNAVIGATOR} component={CartNavigation} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}