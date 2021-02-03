import axios from 'axios'

export const api = axios.create({
  baseURL: `https://task.huuhienqt.dev/api/v1`,
});

api.interceptors.request.use(
  config => {
    const user = localStorage.getItem("user");
    if (user) {
      const userParse = JSON.parse(user)
      if (userParse.access_token) {
        config.headers.common["Authorization"] = `Bearer ${userParse.access_token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, '$axios', {
    get() {
      return api
    },
  })
}
