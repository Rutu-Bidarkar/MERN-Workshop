import studentContext from "./useContextHook";

export default function StudentProvider(props)
{
    const firstname="Deepak";
    const lastname="Kulkarni";
    const studentage="11";

    return(

        <studentContext.Provider value={({firstname, lastname, studentage})}>
            {props.children}
        </studentContext.Provider>

    );
}