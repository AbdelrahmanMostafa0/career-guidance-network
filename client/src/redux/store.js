import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
import loginReducer from "./features/user/userLoginSlice";
import getUserDataReducer from "./features/user/userProfileSlice";
import registerSlice from "./features/user/userRegisterSlice";
// import userDataSlice from "./features/user/userDataSlice";
import SkillsReducer from "./features/user/SkillsSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerSlice,
    userData: getUserDataReducer,
    SkillsData: SkillsReducer,
    // userSideData: userDataSlice,
  },
  //   middleware: [thunkMiddleware],
});
