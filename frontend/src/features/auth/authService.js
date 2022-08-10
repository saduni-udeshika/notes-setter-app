// This authService.js is strictly for just making HTTP requests and sending the data back

import axios from 'axios';

const API_URL_REGISTER = '/api/users/';
const API_URL_LOGIN = '/api/users/login';
const API_URL_All_Users = '/api/users/all-users';

// Register user
const register = async (userData) => {
   const response = await axios.post(API_URL_REGISTER, userData);

   if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
   }

   return response.data;
};

// Login user
const login = async (userData) => {
   const response = await axios.post(API_URL_LOGIN, userData);

   if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
   }

   return response.data;
};

// getAllUsers
const getAllUsers = async () => {
   const response = await axios.get(API_URL_All_Users);

   return response;
};

// Logout user
const logout = () => {
   localStorage.removeItem('user');
};

const authService = {
   register,
   logout,
   login,
   getAllUsers,
};

export default authService;
