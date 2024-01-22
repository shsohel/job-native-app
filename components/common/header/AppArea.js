/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

export default function AppArea({ children }) {
  return <SafeAreaView style={styles.mainArea}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 5,
  },
});
