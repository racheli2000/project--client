import actions from "../actions";
import axios from 'axios';


export const saveUser = (store) => (next) => (action) => {
    if (action.type == "SAVE_NEW_USER") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: action.payLoad.name,
          age: action.payLoad.age,
          city: action.payLoad.city,
          mail: action.payLoad.mail,
          phone: action.payLoad.phone
        }),
      };
      fetch(
        `http://localhost:4000/addNewUser`,
        requestOptions
      ).then((response) => {
        response.json();
        store.dispatch(actions.setNewUser(action.payLoad));
      });
    }
    return next(action);
  };

// export const saveUser = (store) => (next) => (action) => {
//   if (action.type == "SAVE_NEW_USER") {
//     axios
//       .post(
//         `http://localhost:4000/addNewUser`,
//         JSON.stringify({
//           name: action.payLoad.name,
//           age: action.payLoad.age,
//           city: action.payLoad.city,
//           mail: action.payLoad.mail,
//           phone: action.payLoad.phone,
//         })
//       )
//       .then(
//         (response) => {
//           console.log(response);
//           response.json();
//           store.dispatch(actions.setNewUser(action.payLoad));
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }
//   return next(action);
// };

export const getUsers = (store) => (next) => (action) => {
  if (action.type == "GET_ALL_USERS") {
    fetch(`http://localhost:4000/getAllUsers`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        store.dispatch(actions.setAllUsers(result));
        debugger;
      })
      .catch((error) => console.log("error", error));
  }
  return next(action);
};

// export const getUsers = (store) => (next) => (action) => {
//     if (action.type == "GET_ALL_USERS") {
//       axios.get(`http://localhost:4000/getAllUsers`)
//         .then((response) => response.json())
//         .then((result) => {
//           store.dispatch(actions.setAllUsers(result));
//           debugger;
//         })
//         .catch((error) => console.log("error", error));
//     }
//     return next(action);
//   };
