import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./Types/Routes.enum";
import { AddItemScreen, DetailScreen, ListScreen } from "./Screens";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.ListScreen} component={ListScreen} />
        <Stack.Screen name={Routes.DetailScreen} component={DetailScreen} />
        <Stack.Screen name={Routes.AddItemScreen} component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
