import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MonsterList() {
    const [monster, setMonster] = useState([]);
    useEffect(() => {
        fetch('https://mhw-db.com/monsters')
    .then(response => response.json())
    .then(monsters => {
        setMonster(monsters)
    });
    }, []);

    
}