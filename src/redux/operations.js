import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorMessage } from 'components/services/notifications';
axios.defaults.baseURL = 'https://63e10f4765b57fe6065055fa.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
