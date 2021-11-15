import { combineReducers } from "redux";
import users from "./users";
import userStatistics from "./userStatistics";


const rootReducer = combineReducers({
  users: users,
  userStatistics: userStatistics,
  
});
export default rootReducer;
