import { configureStore } from '@reduxjs/toolkit';
import categorySliceReducer from './redux/features/categories/categorySlice';
import subCategorySliceReducer from './redux/features/subcategories/subCategorySlice';

export const store = configureStore({
    reducer: {
        categoryList: categorySliceReducer,
        subCategoryList: subCategorySliceReducer,
    }
})

export default store;