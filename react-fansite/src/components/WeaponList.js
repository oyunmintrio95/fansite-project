import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import WeaponCard from "./WeaponCard";

export default function WeaponList({weapon}) {
    const [weapons, setWeapons] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mhw-db.com/weapons'
            );
            if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
        let actualData = await response.json();
        setWeapons(actualData)
        }
        getData()
    }, []);

    return (
        <div>
            <h1>Weapons</h1>
          
        
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {weapons.map(weapon => {
                    return <WeaponCard weapon={weapon} key={weapon.id}/>
                })}
            </div>
            
        </div>
    );

    
}