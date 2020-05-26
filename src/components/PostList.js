import React from "react";
import Post from "./Post";


const PostList = ({ posts }) => {
    return (<ul>
                { posts.map((post, i) => <li key={i.toString()}>
                    <Post {...post}/>
                </li>)}
            </ul>)
}

export default PostList;

