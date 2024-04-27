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

import { COLORS, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import AllJobCard from "../common/cards/job/AllJobCard";
import Pagination from "./job-pagination/Pagination";

const AllJobs = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedJob, setSelectedJob] = useState();
  const { data, isLoading, error, refetch } = useFetch("job", {
    page: currentPage,
    limit: 10,
  });

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.id}`);
    setSelectedJob(item.id);
  };

  console.log(error);

  const handleLoadMore = () => {
    console.log("first");
    setCurrentPage(currentPage + 1);
    refetch();
  };
  const handleLoadPrevious = () => {
    if (!isLoading && currentPage !== 1) {
      console.log("prev");
    }

    // console.log("first");
    // setCurrentPage(currentPage - 1);
    // refetch();
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
            keyExtractor={(item) => item?.id ?? item}
            onEndReached={handleLoadMore}
            onStartReached={handleLoadPrevious}
            onStartReachedThreshold={0.5}
            // onRefresh={refetch()}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
      <Pagination url={"https://careers.google.com/jobs/results"} />
    </View>
  );
};

export default AllJobs;
