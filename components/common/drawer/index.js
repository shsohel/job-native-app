import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { COLORS, icons, images } from '../../../constants';
import styles from './drawer.style';
import { usePathname, useRouter } from 'expo-router';

const navItems = [
  {
    id: 1,
    label: 'Home',
    link: '/',
    icon: null,
  },
  {
    id: 2,
    label: 'All Jobs',
    link: '/jobs',
    icon: null,
  },
];

const CustomDrawer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRouter = (link) => {
    router.push(link);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ padding: 5 }}>
        <View style={styles.userSection}>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={styles.userAvatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userRoleTxt}>Admin</Text>
            <Text>SH SOHEL</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.drawerItemsContainer}>
        <View style={styles.drawerItemContainer}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                handleRouter(item.link);
              }}
              style={styles.drawerItemWrapper(pathname === item.link)}
            >
              {/* <Text style={styles.pointDot} /> */}
              <Text style={styles.drawerItem(pathname === item.link)}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.lightWhite,
            borderTopWidth: 0.5,
            borderColor: COLORS.gray,
            paddingTop: 2,
            columnGap: 5,
          }}
          onPress={() => {
            Linking.openURL('https://prosohel.com');
          }}
        >
          {/* <Image
            source={icons.copyRight}
            resizeMode="contain"
            style={styles.footerIcon}
          /> */}

          <Text style={{ color: COLORS.gray }}>Programmer Sohel</Text>
          <Text style={{ color: COLORS.gray }}>|</Text>
          <Text style={{ color: COLORS.gray }}>prosohel.com</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
