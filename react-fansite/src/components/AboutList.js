import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutList() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/about')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, []);
    return (

    );
    
}