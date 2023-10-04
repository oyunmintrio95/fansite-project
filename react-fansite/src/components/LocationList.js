import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

export default function LocationList({location}){
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch('https://mhw-db.com/locations')
    .then(response => response.json())
    .then(mon => {
        setLocations(mon)
    });
    }, []);

    return (
        <div>
            <h1>Locations</h1>
          
        
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {locations.map(location => {
                    return <LocationCard location={location} key={location.id}/>
                })}
            </div>
            
        </div>
    );
}