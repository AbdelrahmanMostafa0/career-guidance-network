import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
import loginReducer from "./features/user/userLoginSlice";
import getUserDataReducer from "./features/user/userProfileSlice";
import registerSlice from "./features/user/userRegisterSlice";
// import userDataSlice from "./features/user/userDataSlice";
import SkillsReducer from "./features/user/SkillsSlice";
import projectRducer from "./features/user/projectsSlice";
import certificationReducer from "./features/user/certificationSlice";
import educationReducer from "./features/user/educationSlice";
import companyLoginReducer from "./features/company/companyLoginSlice";
import globalDataReducer from "./features/getData/globalDataSlice";
import experienceReducer from "./features/user/experienceSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerSlice,
    userData: getUserDataReducer,
    SkillsData: SkillsReducer,
    projects: projectRducer,
    certification: certificationReducer,
    education: educationReducer,
    companyLogin: companyLoginReducer,
    globalData: globalDataReducer,
    experience: experienceReducer,
    // userSideData: userDataSlice,
  },
  //   middleware: [thunkMiddleware],
});
