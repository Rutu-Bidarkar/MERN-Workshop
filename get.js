import axios from "axios";
import { useEffect, useState } from "react";

const baseURL="https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData";
var id = "21";

export default function Get()
{
    const [post, setPost] = useState(null);

    useEffect(()=>{
        axios.get(baseURL + "/" + id).then((response)=>{
            setPost(response.data);
        });
    }, []);

    if(!post) return null;

    return (
        <>
        <h2>First Name: {post.firstName} </h2>
        <h2>Last Name: {post.lastName} </h2>
        </>
    );
}