import { createActionObject } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./user_type";

export const setCurrentUser = (user) =>
  createActionObject(USER_ACTION_TYPES.SET_CURRENT_USER, user);
