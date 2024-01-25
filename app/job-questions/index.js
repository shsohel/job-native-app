import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const JobQuestions = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Text>JobQuestions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobQuestions;

const styles = StyleSheet.create({});
