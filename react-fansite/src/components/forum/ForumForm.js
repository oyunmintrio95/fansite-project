import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useForm } from "react-hook-form";

export default function ForumForm({ fetchPosts}) {

    const [post, setPost] = useState([]);

    const [formValues, setFormValues] = useState({
        forumName: "",
        title: "",
        postContent: "",
        postDate: ""
    });

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleChange(evt) {
        setPost(previous => {
            const next = { ...previous };
            next[evt.target.name] = evt.target.value;
            return next;
        });
        
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        }

        fetch("http://localhost:8080/forum", config)
        .then(response => {
            if (response.ok) {
                fetchPosts();
            } else {
                return response.json();
            }
        })
        .then(errs => {
            if (errs) {
                console.log(errs);
                return Promise.reject(errs);
            }
        })
        .catch(errs => {
            if (errs.length) {
                setErrors(errs);
            } else {
                setErrors([errs]);
            }
        });;

    }

    return (
        <>
            <h1 className="display-6">Post Your Thoughts</h1>

            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" htmlFor="forumName">Name</label>
                        <input id="forumName" name="forumName" type="text" className="form-control" required onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <div className="col">
                        <label className="form-label" htmlFor="title">Subject</label>
                        <input id="title" name="title" type="text" className="form-control" required onChange={handleChange}/>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="postContent">Body</label>
                    <textarea id="postContent" name="postContent" type="text" className="form-control" required onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                </div>
            </form>
        </>
    );
}

