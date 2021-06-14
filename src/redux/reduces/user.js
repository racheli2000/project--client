
import produce from "immer";
import execHandler from "./reducerUtils";

const initialState = {
  newUser:{
      name:"שם מלא",
      age:"גיל",
      city:"עיר מגורים",
      mail:"מייל",
      phone:"טלפון"
  },
  AllUsers:[]
};

const user = {

    setNewUser(state, action){

        state.employe.name= action.payLoad.name;

        state.employe.mail= action.payLoad.mail;

        state.employe.age= action.payLoad.age;

        state.employe.city= action.payLoad.city;

        state.employe.phone= action.payLoad.phone;
    },

    setAllUsers(state, action){
        state.AllUsers= action.payLoad;

        // action.payLoad.forEach(element => {
        //     state.AllUsers.push(element);
        // });
    }

};

export default produce((state, action) => {
  execHandler(state, action, user);
}, initialState);
