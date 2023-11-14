import axios from 'axios';

export const client = axios.create({
  baseURL: "http://testifykr.xyz:5000",
  withCredentials: true,
})