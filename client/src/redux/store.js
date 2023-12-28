import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
import loginReducer from "./features/user/userLoginSlice";
import getUserDataReducer from "./features/user/userProfileSlice";
import registerSlice from "./features/user/userRegisterSlice";
// import userDataSlice from "./features/user/userDataSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerSlice,
    userData: getUserDataReducer,
    // userSideData: userDataSlice,
  },
  //   middleware: [thunkMiddleware],
});
