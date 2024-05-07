/** @format */

import axios from "axios";
const {
  EXPO_PUBLIC_API_KEY_B,
  EXPO_PUBLIC_API_BASE_URL,
  EXPO_PUBLIC_API_VERSION,
} = process.env;

const url = `${EXPO_PUBLIC_API_BASE_URL}/${EXPO_PUBLIC_API_VERSION}`;

const baseAxios = axios.create({
  baseURL: url,
});

export default baseAxios;
