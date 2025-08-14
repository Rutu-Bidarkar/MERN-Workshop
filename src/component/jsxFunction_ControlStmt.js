export default function JSXFunctionWithControlStmt()
{
    function FormatName()
    {
       const user = {firstName:'Ankita', lastName:'Bidarkar'};
        return(user.firstName + " " + user.lastName + "!!!");
    
    }


    function GetGreeting(user)
    {
        if(user)
        {
            return (FormatName(user))
        }
        else{
            return ("Hello Stranger!")
        }
    }

    return (
        <div>
            <h2> {GetGreeting(user)} </h2>
            <h2> {GetGreeting()} </h2>
        </div>
    )
}