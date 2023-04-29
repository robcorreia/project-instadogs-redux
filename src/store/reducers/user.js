import createAsyncSlice from "../helper/createAsyncSlice";
import { USER_GET } from "../../Api";
import { fetchToken } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const action = await dispatch(fetchToken(user));
  if (action.payload.token) await dispatch(fetchUser(action.payload.token));
};

export default slice.reducer;
