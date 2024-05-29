import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";
import local_storage from "../../service/localStorage.service";

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: local_storage.getToken() ? local_storage.getToken() : null,
  user: local_storage.getItem("user") ? local_storage.getItem("user") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => ({ ...state, token: token }),
    setUser: (
      _state,
      action: PayloadAction<{
        accessToken: string;
        user: User;
      }>
    ) => {
      local_storage.setItem("accessToken", action.payload.accessToken);
      local_storage.setItem("user", action.payload.user);
      return {
        token: action.payload.accessToken,
        user: action.payload.user,
      };
    },
    setLogout: (state) => {
      local_storage.clear();
      state.token = null;
      state.user = null;
    },
  },
});

export const { setLogout, setUser, setToken } = authSlice.actions;

export default authSlice;
