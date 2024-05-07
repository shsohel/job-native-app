/** @format */

import React, { useEffect, useSate, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./alljobs.style";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import AllJobCard from "../common/cards/job/AllJobCard";
import Pagination from "./job-pagination/Pagination";
import baseAxios from "../../config";

const AllJobs = () => {
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  const [selectedJob, setSelectedJob] = useState();

  const handleGetAllJobs = () => {
    setIsLoading(true);
    const query = new URLSearchParams({ page: currentPage, limit: rowPerPage });
    const endPoint = `/job?${query}`;
    baseAxios
      .post(endPoint, {})
      .then((response) => {
        // console.log(response.data);
        setJobs(response.data.data);
        setIsLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    handleGetAllJobs();
    console.log("run");

    return () => {
      // setCurrentPage(1);
      // setJobs([]);
    };
  }, [currentPage]);

  console.log(currentPage);

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.id}`);
    setSelectedJob(item.id);
  };

  const handleLoadMore = () => {
    console.log("first");
    setCurrentPage(currentPage + 1);
    // refetch();
  };
  const handleLoadPrevious = (number) => {
    console.log("start", number);

    // console.log("pre 01");
    // if (!isLoading && !currentPage >= 1) {
    //   console.log("prev");
    //   setCurrentPage(currentPage - 1);
    // }
    // // console.log("first");
    // // setCurrentPage(currentPage - 1);
    // // refetch();
  };

  const handleScroll = (second) => {
    console.log("scroling");
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
            data={jobs}
            renderItem={({ item }) => (
              <AllJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.id ?? item}
            onEndReached={handleLoadMore}
            onScroll={handleScroll}
            onStartReached={handleLoadPrevious}
            // onScrollToTop={handleLoadPrevious}
            // onStartReachedThreshold={0.5}
            // onRefresh={refetch()}
            scrollEnabled={true}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
      <Pagination url={"https://careers.google.com/jobs/results"} />
    </View>
  );
};

export default AllJobs;
