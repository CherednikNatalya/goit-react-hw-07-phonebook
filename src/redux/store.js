import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import {contactsReducer} from "./slice";


// const initState = {
//     contacts: initialState,
//   };

export const store = configureStore({
    // preloadedState: initState,
    // devTools: true,
    reducer: {
        contacts: contactsReducer,
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  });

  export const persistor = persistStore(store);