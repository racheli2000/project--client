
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import actions from "../redux/actions";


export default function Form(){

    const [name, setName]= useState("שם מלא");
    const [age, setAge]= useState("גיל");
    const [city, setCity]= useState("עיר מגורים");
    const [mail, setMail]= useState("מייל");
    const [phone, setPhone]= useState("טלפון");
    const history= useHistory();


    
    const dispatch= useDispatch();

    function save(){
        dispatch(actions.saveNewUser({name, age, city, mail, phone}));
        history.push('/SHOW_MESSAGE');
    }

    return(
        <>
        <br></br><br></br>
        <h1>ENTER YOUR DETAILS:</h1>
        <br></br>
        <input onChange={v => setName(v.target.value)} placeholder="name" /><br></br><br></br>
        <input onChange={v => setAge(v.target.value)} placeholder="age" /><br></br><br></br>
        <input onChange={v => setCity(v.target.value)} placeholder="city" /><br></br><br></br>
        <input onChange={v => setMail(v.target.value)} placeholder="mail" /><br></br><br></br>
        <input onChange={v => setPhone(v.target.value)} placeholder="phone" /><br></br><br></br>
        <button onClick={save}>save</button>
        </>
    )
}