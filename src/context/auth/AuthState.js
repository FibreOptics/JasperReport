import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

const AuthState = props => {
  const initialState = {
    // token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null, // user info, no. reports visible, etc.
    error: null // handle error
  };
  // Deconstruct from Use reducer
  const [state, dispatch] = useReducer(authReducer, initialState);
  /*   // Login User
  const login = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      // loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  }; */
  // Login User
  const login = () => {
    try {
      dispatch({
        type: LOGIN_SUCCESS
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });
  const { children } = props;
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        // user: state.user,
        error: state.error,
        // loadUser,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthState;
