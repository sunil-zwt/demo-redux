import * as types from "./actionType";
import axios from "axios";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userdeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userEdited = (users) => ({
  type: types.EDIT_USER,
  payload: users,
});
export const loadusers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteuser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(userdeleted());
        dispatch(loadusers());
      })
      .catch((err) => console.log(err));
  };
};

export const adduser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("res", res);
        dispatch(userAdded());
        //   dispatch(loadusers())
      })
      .catch((err) => console.log(err));
  };
};
export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(userEdited(res.data));
      })
      .catch((err) => console.log(err));
  };
};
