import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photo from "./reducers/photo";

const reducer = combineReducers({ photo });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
