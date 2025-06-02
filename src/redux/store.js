import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { filterReduser } from "./filtersSlice";
import { contactsReduser } from "./contactsSlice";

// Окремий persistConfig для contacts
const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReduser),
  filter: filterReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
