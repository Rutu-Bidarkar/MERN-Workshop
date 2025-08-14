import { useContext } from "react";
import studentContext from "./useContextHook";

export default function StudentConsumer2()
{
    const studentdata= useContext(studentContext);
    return(
        <div>
            <h3>You are  {studentdata.studentage} years old!!</h3>
        </div>
    );
}