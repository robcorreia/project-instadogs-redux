import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";

const reducer = combineReducers({ photo, token, user });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
