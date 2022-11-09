import { configureStore } from '@reduxjs/toolkit';
import categorySliceReducer from './redux/features/categories/categorySlice';
import categoryDashSliceReducer from './redux/features/categoriesDash/categoriesDashSlice';
import subCategorySliceReducer from './redux/features/subcategories/subCategorySlice';
import registerUserReducer from './redux/features/registerSlice/registerSlice';

export const store = configureStore({
    reducer: {
        categoryList: categorySliceReducer,
        categoryDashList: categoryDashSliceReducer,
        subCategoryList: subCategorySliceReducer,
        registerUser: registerUserReducer,
    }
})

export default store;