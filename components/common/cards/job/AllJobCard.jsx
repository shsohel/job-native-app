import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './alljobcard.style';
import { checkImageURL } from '../../../../utils';

const AllJobCard = ({ item, selectedJob, handleCardPress }) => {
  const location = JSON.parse(item.jobLocation);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => {
        handleCardPress(item);
      }}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.organization?.name ?? ""}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={styles.location}
        >{`${location.state}, ${location.country}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AllJobCard;
