/** @format */

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS, icons, images } from '../constants';
import CustomDrawer from '../components/common/drawer';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return (
    <Drawer
      initialRouteName="jobs"
      backBehavior="history"
      onLayout={onLayoutRootView}
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
    />
  );
};

export default Layout;
