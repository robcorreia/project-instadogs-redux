import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";
import feed from "./reducers/feed";

const reducer = combineReducers({ photo, token, user, feed });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
