import { Link, useLocation } from "react-router-dom";
import WeaponCard from "../WeaponCard";

export default function WeaponGreatSword(){
    const location = useLocation();

    const { greatSwordList } = location.state;

    let weapons = [];


    Object.values(greatSwordList).map(weap => {
        weap.map(weapon => {
           weapons.push(weapon);
        })
    })
   


    return(
        <>  
            <div className="d-flex justify-content-end">
                <Link className="btn btn-warning mb-3" to="/weapons">Back</Link>
            </div>
            
            <h1 className="mb-3">Great Swords</h1>
            <div className="mb-3">
             <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {  weapons.map(weapon => {
                        return <WeaponCard weapon={weapon} key={weapon.id}/>
                    })
                }
            </div>
        </div>
        </>
    );
    
}