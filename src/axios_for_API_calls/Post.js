import axios from 'axios'
import {useState, useEffect} from 'react'
import Fetch from './Fetch';

function Post(){

    const createPost = async ()=>{
        try {
            const response = await axios.post (
                "https://jsonplaceholder.typicode.com/posts",
                {
                    title: "Our title",
                    body: "Our text",
                }
            );
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div className = "text-blue-500">

            <h1>React Axios Post</h1>
            <button onClick = {createPost}> Create</button>
            <Fetch/>

        </div>
    )
}

export default Post;