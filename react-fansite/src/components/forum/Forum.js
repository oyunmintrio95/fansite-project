import ForumForm from "./ForumForm";
import ForumPostList from "./ForumPostList";
import { useEffect, useState } from "react";

export default function Forum(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:8080/forum");
            if (response.ok) {
                setPosts(await response.json());
            } else {
                setPosts([]);
            }
        };

        fetchPosts();
    }, []);


    return (
        <>
            <h1>Ye Olde Forum</h1>
            <ForumForm />
            <ForumPostList posts={posts} />
        </>
        
    );
}