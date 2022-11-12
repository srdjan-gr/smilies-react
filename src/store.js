import { configureStore } from '@reduxjs/toolkit';
import categorySliceReducer from './redux/features/categories/categorySlice';
import subCategorySliceReducer from './redux/features/subcategories/subCategorySlice';

import categoryDashSliceReducer from './redux/features/categoriesDash/categoriesDashSlice';
import subCategoryDashSliceReducer from './redux/features/subcategoriesdash/subCategoriesDahsSlice';

import registerUserReducer from './redux/features/registerSlice/registerSlice';

// import { getDashCategories, editDashCategories } from './redux/features/categoriesDash/categoriesDashSlice';

export const store = configureStore({
    reducer: {
        categoryList: categorySliceReducer,
        subCategoryList: subCategorySliceReducer,
        registerUser: registerUserReducer,


        // editDashCategory: categoryDashSliceReducer

        categoryDashList: categoryDashSliceReducer,
        subCategoryDashList: subCategoryDashSliceReducer,
    }
})

export default store;