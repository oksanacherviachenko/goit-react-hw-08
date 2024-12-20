import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('No valid token');
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Запит на відновлення пароля
export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/forgot-password', { email });
    return data.message; // Наприклад, "Password reset email sent"
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Запит на скидання пароля
export const resetPassword = createAsyncThunk('auth/resetPassword', async ({ token, newPassword }, thunkAPI) => {
  try {
    const { data } = await axios.post(`/users/reset-password`, { token, password: newPassword });
    return data.message; // Наприклад, "Password has been reset"
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
