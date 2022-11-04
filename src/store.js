import { configureStore } from '@reduxjs/toolkit';
import categorySliceReducer from './redux/features/categories/categorySlice';
import subCategorySliceReducer from './redux/features/subcategories/subCategorySlice';
import registerUserReducer from './redux/features/registerSlice/registerSlice';

export const store = configureStore({
    reducer: {
        categoryList: categorySliceReducer,
        subCategoryList: subCategorySliceReducer,
        registerUser: registerUserReducer,
    }
})

export default store;