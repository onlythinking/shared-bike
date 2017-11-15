import axios from 'axios';

let base = 'http://localhost:8080';

export const requestLogin = params => { return axios.post(`login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/users`, { params: params }); };

export const getUsersListPage = params => { return axios.get(`${base}/users/of_pages`, { params: params }); };

export const editUser = params => { return axios.put(`${base}/users`, { params: params }); };

export const addUser = params => { return axios.post(`${base}/users`, { params: params }); };

export const getBikesListPage = params => { return axios.get(`${base}/users/of_pages`, { params: params }); };

export const editBike = params => { return axios.put(`${base}/users`, { params: params }); };
