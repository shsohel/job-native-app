/** @format */

import { Stack, useRouter, useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../constants";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
import Header from "../components/common/header/Header";
import AppArea from "../components/common/header/AppArea";
const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AppArea>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </AppArea>
  );
};

export default Home;
