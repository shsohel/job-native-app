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
import { COLORS, FONT, SIZES, icons, images } from "../../../constants";
import styles from "./drawer.style";
import { usePathname, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
const navItems = [
  {
    id: 1,
    label: "Home",
    link: "/",
    icon: null,
  },
  {
    id: 2,
    label: "All Jobs",
    link: "/jobs",
    icon: null,
  },
  {
    id: 3,
    label: "Job Questions",
    link: "/job-questions",
    icon: null,
  },
  {
    id: 4,
    label: "Job Exam",
    link: "/job-exams",
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

      <View style={styles.socialIcons}>
        <View>
          <Text style={styles.socialTitle}>Connecting us:</Text>
        </View>
        <Ionicons name="logo-youtube" size={28} color="#FF0000" />
        <Ionicons name="logo-facebook" size={28} color="#0866FF" />
        <Ionicons name="logo-linkedin" size={28} color="#0A66C2" />
        <Ionicons name="logo-whatsapp" size={28} color="#238547" />
      </View>
      <View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.lightWhite,
            borderTopWidth: 0.5,
            borderColor: COLORS.gray,
            paddingVertical: 5,
            columnGap: 5,
          }}
          onPress={() => {
            Linking.openURL("https://prosohel.com");
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
