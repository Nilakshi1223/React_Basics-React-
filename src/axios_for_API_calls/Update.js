import axios from 'axios'
import {useState, useEffect} from 'react'
import Fetch from './Fetch';
import Post from './Post';

function Update(){

    const updatePost = async ()=>{
        try {
            const response = await axios.put (
                "https://jsonplaceholder.typicode.com/posts/1",
                {
                    title: "Updated title",
                    body: "Updated text",
                }
            );
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div className = "text-blue-500">

            <h1>React Axios Update</h1>
            <button onClick = {updatePost}> Update</button>
            <Post/>
            {/*<Fetch/>*/}

        </div>
    )
}

export default Update;