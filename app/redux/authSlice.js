import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    email: null,
    _id: null,
    subscription: null
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setId(state, action) {
        state._id = action.payload;
    },
    setEmail(state,action) {
        state.email = action.payload;
    },
    setSubscription(state,action) {
        state.subscription = action.payload;
    },
    resetAuth(state) {
      state.token = null;
      state.email = null;
      state._id = null;
      state.subscription = null;
    },
  },
});

export const { setToken, setId, setEmail, setSubscription, resetAuth } = authSlice.actions;

export default authSlice.reducer;