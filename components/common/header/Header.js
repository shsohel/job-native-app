/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { COLORS, icons, images } from "../../../constants";
import ScreenHeaderBtn from "./ScreenHeaderBtn";
export default function Header() {
  const navigation = useNavigation();
  return (
    <Stack.Screen
      options={{
        headerStyle: {
          backgroundColor: COLORS.lightWhite,
        },

        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension="60%"
            handlePress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="80%" />
        ),
        headerTitle: "",
      }}
    />
  );
}

const styles = StyleSheet.create({});
