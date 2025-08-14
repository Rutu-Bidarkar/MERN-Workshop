export default function BootstrapExample()
{
    return (
        <>
        <p>This is a regular HTML Button</p>
        <button type="submit">Submit</button>

        <p>These are Bootstrap buttons</p>
        <button class="btn btn-primary">ADD</button> 
        <button class="btn btn-warning">WARNING</button> 

        <p>Bootstrap Table</p>
        <table class="table table-bordered table-dark">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tr>
                <td>Amit</td>
                <td>Kumar</td>
            </tr>
            <tr>
                <td>Rohan</td>
                <td>Shah</td>
            </tr>
        </table>
        </>
    )

}