import axios from 'axios'
import {useState, useEffect} from 'react'
import Fetch from './Fetch';
import Post from './Post';
import Update from './Update';

function Delete(){

    const deletePost = async ()=>{
        try {
            const response = await axios.delete (
                "https://jsonplaceholder.typicode.com/posts/23",
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

            <h1>React Axios Delete</h1>
            <button onClick = {deletePost}> Delete</button>
            {/*<Fetch/>
            <Post/>*/}

        </div>
    )
}

export default Delete;