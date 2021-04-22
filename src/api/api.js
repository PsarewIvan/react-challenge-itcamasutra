import * as axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cf50e140-3ca8-491e-83e9-6e5e48b9e22e',
  },
});

const AuthAPI = {
  getCurrentUser() {
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
};

export { AuthAPI, UsersAPI, ProfileAPI, FollowAPI };
