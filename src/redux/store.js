import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice'; // Дефолтний імпорт
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Конфігурація persist для auth
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Комбінування редюсерів
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filters: filtersReducer,
});

// Конфігурація store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Експорт persistor для persist
export const persistor = persistStore(store);

