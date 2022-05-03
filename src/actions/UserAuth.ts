import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface ModeState {
    isLoggedIn: boolean;
    userInfo: string
}

const initialState: ModeState = {
  isLoggedIn: false,
  userInfo: '',
};


export const mode = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setUserAuth:(state, action) => {
        state.isLoggedIn = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  },
  
});

export const { setUserAuth, setUserInfo } = mode.actions;

export const getUserAuth = (state: RootState) => state.userAuth.isLoggedIn;
export const getuserInfo = (state: RootState) => state.userAuth.userInfo;


export default mode.reducer;
