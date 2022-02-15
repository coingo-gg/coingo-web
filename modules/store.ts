import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
const devMode = process.env.NODE_ENV === "development";

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: devMode,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
