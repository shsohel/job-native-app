/** @format */

import { StyleSheet, Text } from 'react-native';
import Header from '../../components/common/header/Header';
import AppArea from '../../components/common/header/AppArea';
import AllJobs from '../../components/jobs/AllJobs';

export default function Jobs() {
  return (
    <AppArea>
      <Header />
      <AllJobs />
    </AppArea>
  );
}

const styles = StyleSheet.create({});
