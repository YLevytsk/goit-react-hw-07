// src/redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '', // строка фильтра по имени
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload; // обновляет значение фильтра
    },
  },
});

// Экспортируем action и селектор
export const { setFilter } = filterSlice.actions;
export const selectNameFilter = state => state.filters.name;

export default filterSlice.reducer;

