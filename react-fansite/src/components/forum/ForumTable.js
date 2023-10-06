export default function ForumTable({ posts }) {

    // function populatePosts(posts) {

    //     const entity = "post";
    
    //     const table = document.querySelector(".list > table");
    //     const tbody = table.querySelector("tbody");
    
    //     let html = "";
    //     for (const post of posts) {
    
    //         html += `<tr>
    //             <td>${post.postDate}</td>
    //             <td>${post.forumName}</td>
    //             <td>
    //                 <p><strong>${post.title}</strong><br />
    //                 ${post.postContent}</p>
    //             </td>
    //         </tr>`;
    //     }
    
    //     tbody.innerHTML = html;
    // }

    return (

        <>
            {posts.map(post => (
                <tr key={post.postId}>
                        <td>${post.postDate}</td>
                        <td>${post.forumName}</td>
                        <td>
                            <p><strong>${post.title}</strong><br />
                            ${post.postContent}</p>
                        </td>
                </tr>
            ))}
        </>


    );
}