import React, { useSate, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './alljobs.style';
import { useRouter } from 'expo-router';

import { COLORS, SIZES } from '../../constants';
import JobFooter from '../jobdetails/footer/Footer';
import useFetch from '../../hook/useFetch';
import AllJobCard from '../common/cards/job/AllJobCard';
import Pagination from './job-pagination/Pagination';

const AllJobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React',
    num_pages: 1,
  });

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>All Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <AllJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id ?? item}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
      <Pagination url={'https://careers.google.com/jobs/results'} />
    </View>
  );
};

export default AllJobs;
