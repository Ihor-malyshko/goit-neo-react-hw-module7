import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  API_BASE_URL,
  getApiSetupMessage,
  isApiConfigured,
} from '../config/api';

const getErrorMessage = (error) => {
  if (!isApiConfigured()) {
    return getApiSetupMessage();
  }

  const status = error.response?.status;

  if (status === 500 || status === 404) {
    return `${getApiSetupMessage()} (HTTP ${status})`;
  }

  return error.response?.data?.message || error.message;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    if (!isApiConfigured()) {
      return thunkAPI.rejectWithValue(getApiSetupMessage());
    }

    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    if (!isApiConfigured()) {
      return thunkAPI.rejectWithValue(getApiSetupMessage());
    }

    try {
      const response = await axios.post(API_BASE_URL, contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    if (!isApiConfigured()) {
      return thunkAPI.rejectWithValue(getApiSetupMessage());
    }

    try {
      const response = await axios.delete(`${API_BASE_URL}/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  }
);
