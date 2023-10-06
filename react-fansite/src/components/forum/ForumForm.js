import { useEffect, useState } from "react";

export default function ForumForm() {

    const [agent, setAgent] = useState({
        forumName: "",
        title: "",
        postContent: "",
        dob: "",
        heightInInches: ""
    });
    const [errors, setErrors] = useState([]);

    function handleChange(evt) {

        setAgent(previous => {
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
            body: JSON.stringify(agent)
        }

        fetch("http://localhost:8080/forum", config);
        
    }

    return (
        <>
            <h1 className="display-6">Add an Agent</h1>

            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label" htmlFor="forumName">Name</label>
                        <input id="forumName" name="forumName" type="text" className="form-control" required />
                    </div>
                </div>

                <div>
                    <div className="col">
                        <label className="form-label" htmlFor="title">Subject</label>
                        <input id="title" name="title" type="text" className="form-control" />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="postContent">Body</label>
                    <input id="postContent" name="postContent" type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                </div>
            </form>
        </>
    );
}

