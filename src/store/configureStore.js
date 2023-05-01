import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";
import feed from "./reducers/feed";
import ui from "./reducers/ui";
import photoPost from "./reducers/photoPost";

const reducer = combineReducers({ photo, photoPost, token, user, feed, ui });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
