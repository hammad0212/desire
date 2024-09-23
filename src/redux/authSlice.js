import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../src/apiconfig/authconfiq';
import axiosInstanceUsers from '../../src/apiconfig/profileconfig';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/login', userData); // Ensure endpoint matches backend
      console.log('Login response:', response.data);
      localStorage.setItem('jwt', response.data.jwt);
      navigate('/'); // Redirect to the home page after successful login
      return response.data;
    } catch (error) {
      console.log('Login error:', error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/signup', userData); // Ensure endpoint matches backend
      console.log('Signup response:', response.data);
      const { jwt } = response.data;
      localStorage.setItem('jwt', jwt);
      navigate('/login');
      return response.data;
    } catch (error) {
      console.log('Signup error:', error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const getUserProfile = createAsyncThunk('auth/getUserProfile', async () => {
  try {
    const response = await axiosInstanceUsers.get('/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    console.log('Get user profile response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Get user profile error:', error.response ? error.response.data : error.message);
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state, action) {
      state.user = null;
      localStorage.removeItem('jwt');
      // action.payload.navigate('/login');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        localStorage.setItem('jwt', action.payload.jwt);
        console.log('Login fulfilled:', action.payload);
        action.meta.arg.navigate('/'); // Redirect to the home page
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log('Login rejected:', action.payload); // Log login rejection
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        localStorage.setItem('jwt', action.payload.jwt);
        console.log('Signup fulfilled:', action.payload);
        action.meta.arg.navigate('/login');
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log('Signup rejected:', action.payload); // Log signup rejection
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log('Get user profile fulfilled:', action.payload); // Log profile fetch success
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
