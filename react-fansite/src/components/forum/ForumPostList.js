import ForumPost from "./ForumPost";
import ForumTable from "./ForumTable";
import { useEffect, useState } from "react";

export default function ForumPostList() {

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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>


                    {posts.length == 0 ?
                        <div className="alert alert-warning py-4">
                            No posts found.<br />
                            Do you want to add an post?
                        </div>
                        : <ForumTable posts={posts} />}

                </tbody>
            </table >
        </>
    );
}


