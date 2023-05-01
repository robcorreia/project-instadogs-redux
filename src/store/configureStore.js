import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";
import feed from "./reducers/feed";
import ui from "./reducers/ui";

const reducer = combineReducers({ photo, token, user, feed, ui });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
