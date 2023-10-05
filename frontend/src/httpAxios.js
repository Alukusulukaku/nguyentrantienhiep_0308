import axios from "axios";

const httpAxios = axios.create({
  baseURL: "http://localhost/fjallraven_db/public/api/",
  timeout: 6000,
  headers: { "X-Custom-Header": "foobar" },
});

export default httpAxios;
