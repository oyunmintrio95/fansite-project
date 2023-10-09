import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AboutCard from "./AboutCard";

export default function AboutList() {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/about')
            .then(res => res.json())
            .then(data => setAbouts(data));
    }, []);

    return (
        <div>
            <h1>About</h1>
            <hr></hr>
            <h2> About the Website</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">
                <div className="col-4">
                    <img src="https://static.tvtropes.org/pmwiki/pub/images/monsterhunterworld.jpg"/>
                </div>
                <div className = "col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis harum, quisquam quos molestiae magni pariatur asperiores commodi, eos dolore sit animi, impedit vero nulla illo. Nihil earum expedita illum recusandae adipisci animi, quasi, placeat quibusdam nam impedit deserunt architecto tempora. Facilis nemo laboriosam vero accusantium quis possimus itaque doloribus recusandae alias, perspiciatis beatae explicabo sunt. Perferendis, dolore sapiente temporibus quasi porro mollitia vero inventore optio nulla cum alias maxime voluptatem vitae consectetur tempore delectus quidem laboriosam nam similique numquam vel dolorum accusantium assumenda. Ea exercitationem vel, earum, soluta dolor veritatis vero consequatur magnam nisi nostrum dolore fugiat? Inventore, nostrum corrupti.</div>
            </div>
            <h2>About Us</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {abouts.map(about => {
                    return <AboutCard about={about} key={about.aboutId}/>
                })}
            </div>
        </div>

    );


}