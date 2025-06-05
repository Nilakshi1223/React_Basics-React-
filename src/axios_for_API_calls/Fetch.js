import axios from 'axios'
import {useState, useEffect} from 'react'

function Fetch(){
    const [posts, setPosts] = useState([]);

    const fetchPosts = async ()=>{
        try {
            const response = await axios.get (
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect( () => {
        fetchPosts()
    },[]);


    return (
        <div className = "text-blue-500">
            <h1>React Axios Fetch </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {posts.map ((posts) => (
                    <div className="rounded p-4 bg-slate-200 text-black flex flex-col gap-2"
                    key = {posts.id}>
                        <h2>{posts.title}</h2>
                        <p>{posts.body}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Fetch;