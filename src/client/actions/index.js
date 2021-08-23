// import axios here if we want to go to another api

export const FETCH_USERS = "fetch_users";

// this async syntax generates the "ReferenceError: regeneratorRuntime is not defined"
//   babel is complaining that regeneratorRuntime is not setup in the env
//   import "babel-polyfill" fixes it
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

export const FETCH_ADMINS = "fetch_admins";
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get("/admins");

  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};
