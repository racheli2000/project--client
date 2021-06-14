import { useSelector } from "react-redux"


export default function Show_Message(){

    const Data= useSelector(state => state.user);

    return(
        <>
        <br></br><br></br>
            <p>
                שמי {Data.newUser.name} <br></br>
                ואני בן {Data.newUser.age}<br></br>
                מ{Data.newUser.city}<br></br>
                המייל שלי הוא: {Data.newUser.mail}<br></br>
                והטלפון שלי הוא: {Data.newUser.phone}<br></br>
               </p>
        </>
    )
}