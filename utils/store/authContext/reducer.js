import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useReducer } from "react";
import { useContext } from "react";

const defaultState = {
  user: { verified: true },
};

const reducer = (state, action) => {
  switch (action.type) {
    // case "VERIFICATION_ID_RECIEVED": {
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       verificationId: action.payload.verificationIdd,
    //     },
    //   };
    // }

    case "VERIFICATION_CODE_CORRECT": {
      const user = { verified: true };

      AsyncStorage.setItem("user", JSON.stringify(user), (user) => {});

      return {
        ...state,
        user: {
          ...state.user,
          verified: true,
        },
      };
    }

    case "LOGOUT_USER": {
      const user = { verified: false };
      AsyncStorage.setItem("user", JSON.stringify(user), (user) => {});
      return {
        user: {
          ...state.user,
          verified: false,
        },
      };
    }

    default:
      return state;
  }
};

export const Auth = createContext({});

// export const useAuth = () => {
//   return useContext(Auth)
// };

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const value = { state, dispatch };
  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};
