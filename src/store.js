import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import categorySliceReducer from './redux/features/categories/categorySlice';

export const store = configureStore({
    reducer: {
        categoryList: categorySliceReducer,
    }
})

export default store;