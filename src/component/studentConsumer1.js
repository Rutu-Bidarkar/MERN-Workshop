import { useContext } from "react";
import studentContext from "./useContextHook";

export default function StudentConsumer1()
{
    const studentdata= useContext(studentContext);
    return(
        <div>
            <h2>Student Information</h2>
            <h3>Welcome {studentdata.firstname} {studentdata.lastname} </h3>
        </div>
    );
}