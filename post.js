import axios from "axios";
import React, {useState} from "react";

const baseURL = "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData";

export default function Post()
{
    const [post, setPost] = useState(null);

    const fname= "Rutuja";
    const lname= "Bidarkar";

    function CreatePost()
    {
        axios.post(baseURL, {
            firstName: fname,
            lastName: lname
        })
        .then((response)=> {
            setPost(response.data);
        });
        
        
    }

    return (
            <div>
                <button onClick={CreatePost}>Create Post</button>

                {post && (
                    <>
                    <h2>First Name: {post.firstName} </h2>
                    <h2>Last Name: {post.lastName} </h2>
                    </>
                )}
            </div>
        );
}