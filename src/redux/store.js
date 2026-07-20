import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer as contactsSliceReducer } from './contactsSlice';
import { filtersReducer as filtersSliceReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
});
