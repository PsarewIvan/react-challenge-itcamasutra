import * as axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f1c20cf5-f59e-4ac4-b25b-c110b6e33967',
  },
});

const AuthAPI = {
  authMe() {
    return axiosInstance.get(`auth/me`).then((response) => response.data);
  },
};

const UsersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

const ProfileAPI = {
  getProfileInfo(id) {
    return axiosInstance.get(`profile/${id}`).then((response) => response.data);
  },

  getProfileStatus(id) {
    return axiosInstance
      .get(`profile/status/${id}`)
      .then((response) => response);
  },

  updateProfileStatus(status) {
    return axiosInstance
      .put(`profile/status`, { status })
      .then((response) => response);
  },
};

const FollowAPI = {
  follow(id) {
    return axiosInstance.post(`follow/${id}`).then((response) => response.data);
  },

  unFollow(id) {
    return axiosInstance
      .delete(`follow/${id}`)
      .then((response) => response.data);
  },

  isFollow(id) {
    return axiosInstance.get(`follow/${id}`).then((response) => response);
  },
};

export { AuthAPI, UsersAPI, ProfileAPI, FollowAPI };
