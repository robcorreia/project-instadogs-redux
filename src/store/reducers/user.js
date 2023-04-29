import createAsyncSlice from "../helper/createAsyncSlice";
import { USER_GET } from "../../Api";
import { fetchToken, resetTokenState } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = slice.asyncAction;
const { resetState: resetUserState } = slice.actions;

export const userLogin = (user) => async (dispatch) => {
  const action = await dispatch(fetchToken(user));
  if (action.payload.token) await dispatch(fetchUser(action.payload.token));
};

export const userLogout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem("token");
};

export default slice.reducer;
