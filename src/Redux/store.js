import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './contacts/contacts-slice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, rootReducer),
  },
});

const persistor = persistStore(store);
export { store, persistor };
