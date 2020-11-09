import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/canvasp-c6cf0/us-central1/api",
});

export default instance;
