export default function JSXFunction()
{
    const user = {firstName:'Rutuja', lastName:'Bidarkar'};

    function FormatName(user)
    {
        return(user.firstName + " " + user.lastName + "!!!");
    }

    return(
        <h2>Hello {FormatName(user)} </h2>
    )
}