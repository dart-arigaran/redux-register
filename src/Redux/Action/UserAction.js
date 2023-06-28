import axios from "axios";
import { API_KEY_ADD_EMPLOYEE } from "../../base";

export const addUser = (userData) => {
  return (dispatch) => {
    axios
      .post(API_KEY_ADD_EMPLOYEE, userData, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "ADD_USER",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export function addUser(userData) {
//   return function (dispatch) {
//     axios
//       .post(API_KEY_ADD_EMPLOYEE, userData, {
//         headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//       })
//       .then((res) => {
//         console.log(res);
//         dispatch({
//           type: "ADD_USER",
//           payload: res.data,
//         });
//       });
//   };
// }
