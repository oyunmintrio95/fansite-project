import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ForumForm from "./ForumForm";
import ForumPostList from "./ForumPostList";
import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";

export default function Forum(){

    const [posts, setPosts] = useState([]);

    const auth = useContext(AuthContext);

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:8080/forum");
        if (response.ok) {
            setPosts(await response.json());
        } else {
            setPosts([]);
        }
    };
   
    useEffect(() => {
        fetchPosts()
    }, []);


    return (
        <>
            <h1>Ye Olde Forum</h1>
            {!auth.user && (<div>
            <Link className="btn btn-primary" to="/login">Login</Link>
            </div>)}
            {auth.user && (
            <div>
                    Welcome {auth.user.username}!
            <button className="btn btn-primary" onClick={() => auth.logout()}>Logout</button>
            </div>
            )}
            
            {auth.user &&(<ForumForm fetchPosts={fetchPosts}/>)}
            <ForumPostList posts={posts} />
        </>
        
    );
}