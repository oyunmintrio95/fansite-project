import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArmorCard from "./ArmorCard";

export default function ArmorList(){
    const [ armors, setArmors ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://mhw-db.com/armor')
            .then(res => {
                if (res.ok ){
                    return res.json();
                }else if(res.status >= 500 ){
                    return res
                            .json()
                            .then(error => Promise.reject(new Error(error.message)));
                }else{
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(setArmors)
            .catch(error => {
                console.error(error);
                navigate('/error', {state : {error}});
            })
    },[])

    return (
        <div>
            <h1>Armors</h1>
          
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {armors.map(armor => {
                    return <ArmorCard armor={armor} key={armor.id}/>
                })}
            </div>
            
        </div>

    );
}