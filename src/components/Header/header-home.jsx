import React from "react";
import { Text } from "react-native";
import { Appbar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerHome from "../Drawer/drawer-home";

export default function HeaderHome() {
  // Change This tobe your actions
  const handleSearch = () => {
    console.log("Search Active!");
  };
  const handleMenu = () => {
    <DrawerHome />;
    console.log("Menu Active!");
  };

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={handleMenu} />
      <Appbar.Content
        title={
          <Text className="text-lg">
            <MaterialCommunityIcons name="cards-outline" size={26} />
            Hotel App Group 6
          </Text>
        }
        mode="center-aligned"
        style={{ alignItems: "center" }}
      />
      <Appbar.Action icon="map-outline" onPress={handleSearch} />
    </Appbar.Header>
  );
}
