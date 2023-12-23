import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
import loginReducer from "./features/user/userLoginSlice";
import getUserDataReducer from "./features/user/userDataSlice";
import registerSlice from "./features/user/userRegisterSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerSlice,
    userData: getUserDataReducer,
  },
  //   middleware: [thunkMiddleware],
});
