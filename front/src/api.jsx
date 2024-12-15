import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:8000/api",
});

const setAuthHeader = (username, password) => {
    const token = btoa(`${username}:${password}`);
    API.defaults.headers.common["Authorization"] = `Basic ${token}`;
};

export const register = (data) => API.post("/register", data);
export const login = (data) => API.post("/login", data);
export const getUser = (username) => API.get(`/users/${username}`);
export const getPosts = (username, page = 1) =>
    API.get(`/users/${username}/posts?page=${page}`);
export const createPost = (username, data) =>
    API.post(`/users/${username}/posts`, data);
export const likePost = (username, postId) =>
    API.put(`/users/${username}/posts/${postId}/like`);
export const unlikePost = (username, postId) =>
    API.delete(`/users/${username}/posts/${postId}/like`);

export default setAuthHeader;
