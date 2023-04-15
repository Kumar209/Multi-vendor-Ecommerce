import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.js"
// import { sellerReducer } from "./reducers/seller";
// import { productReducer } from "./reducers/product";
// import { eventReducer } from "./reducers/event";

// Combined all reducers in store it self
const Store = configureStore({
  reducer: {
    user: userReducer,
    // seller: sellerReducer,
    // products: productReducer,
    // events: eventReducer,
  },
});

export default Store;