import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "./features/counter/CounterSlice";
import ProductSlice from "./features/product/ProductSlice";
import CategorySlice from "./features/category/CategorySlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        product: ProductSlice,
        categorys: CategorySlice
    },
})