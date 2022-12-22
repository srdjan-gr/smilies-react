import { configureStore } from '@reduxjs/toolkit';
import categorySliceReducer from './redux/features/categories/categorySlice';
import subCategorySliceReducer from './redux/features/subcategories/subCategorySlice';

import categoryDashSliceReducer from './redux/features/categoriesDash/categoriesDashSlice';
import subCategoryDashSliceReducer from './redux/features/subcategoriesdash/subCategoriesDahsSlice';

import cartSlice from './redux/features/cart/cartSlice';
import productsSlice from './redux/features/products/productsSlice';

import ordersSlice from './redux/features/orders/ordersSlice';

export const store = configureStore({
    reducer: {
        categoryList: categorySliceReducer,
        subCategoryList: subCategorySliceReducer,
        // registerUser: registerUserReducer,

        categoryDashList: categoryDashSliceReducer,
        subCategoryDashList: subCategoryDashSliceReducer,
        productsList: productsSlice,

        cartList: cartSlice,
        ordersList: ordersSlice,
    }
})

export default store;