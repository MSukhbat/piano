import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { About } from "./screens/About";

import { createStackNavigator } from "@react-navigation/stack";
import { Home1 } from "./screens/Home1";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Piano } from "./screens/Piano";
import { Second } from "./screens/Second";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Home1" component={Home1} />
    </HomeStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
        tabBarItemStyle: { marginBottom: -30 },
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeStackNavigator} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="Piano" component={Piano} />
        <Drawer.Screen name="Second" component={Second} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
