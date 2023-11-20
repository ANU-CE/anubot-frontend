import axios from 'axios';

export const client = axios.create({
  baseURL: "https://testifykr.xyz:5000",
  withCredentials: true,
})