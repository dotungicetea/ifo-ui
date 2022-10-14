import React, { createContext } from "react";

export type UserContextType = {
  loginUser: any,
  setLoginUser: (user: any) => void,
};

export const UserContext = createContext<UserContextType>({
  loginUser: '',
  setLoginUser: () => {},
});
