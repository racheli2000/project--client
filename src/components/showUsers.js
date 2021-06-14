import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";

export default function Show_Users() {

    const dispatch= useDispatch();
    const Data= useSelector(state => state.user);

    useEffect(() => {
        dispatch(actions.getAllUsers())
    })

  return (
    <>
        {Data.AllUsers.map((user, index) => {
          <p>
            user number {index+1}:
            {user.name}
            <br></br>
            {user.mail}
          </p>;
        })}
    </>
  );
}


