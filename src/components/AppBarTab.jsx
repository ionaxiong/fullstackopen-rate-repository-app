import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RepositoryList from "./RepositoryList";

const Tab = createBottomTabNavigator();
const AppBarTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Repositories" component={RepositoryList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppBarTab;
