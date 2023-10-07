import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import data from '../../data/locations.json';
import imageph from '../image-ph.jpg';
import mapph from '../map-ph.jpg';

const INITIAL_LOCATION = {
	id: 0,
    name: "",
    category: "",
    type: "",
    summary: "",
    about: "",
    description: "",
    hazards: [],
    materials: [],
    monsters: [],
    quests: [],
    images: [],
    references: [],
    maps: []
};

export default function LocationDetail(){

    // const [ locations, setLocations] = useState(`data.locations`);
// console.log(locations);
    const { locationId } = useParams();
console.log(locationId);
    console.log(data);

    
    // const getObjectById = (locationId) => {
    // let thisLocation = data.locations.find(location => location.id === locationId);

    let thisLocation = data.locations.find(location => location.id === locationId);
    console.log(thisLocation.name);
    //     return thisLocation;
    // };
// console.log(thisLocation);
    // let place = getObjectById(2);
    // console.log(place);

    function phCheck(imgFileName){
        switch(imgFileName){
            case "image-ph.jpg":
                imgFileName = imageph;
                break;
            case "map-ph.jpg":
                imgFileName = mapph;
                break;
            default:
                imgFileName = imgFileName;
        }
        return imgFileName;
    }

    // console.log(thisLocation);
    // console.log(data.locations.location.name);

    const navigate = useNavigate();

    return(
        <>
            {/* <h1 className='mt-3 mb-3'> {location.name} Details</h1>

            <div className='mb-3'>
                <label className='form-label'>Name</label>
                    <input type="text" className="form-control" 
                    id = "name"
                    name = "name"
                    value = {location.name}
                    readOnly />
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>Type</label>
                    <input type="text" className="form-control" 
                    id = "type"
                    name = "type"
                    value = {location.type}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Category</label>
                    <input type="text" className="form-control" 
                    id = "category"
                    name = "category"
                    value = {location.category}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rarity</label>
                    <input type="text" className="form-control" 
                    id = "rarity"
                    name = "rarity"
                    value = {location.rarity}
                    readOnly />
                </div>
            </div>
            <div className='mb-3'>
                <h4>Information</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Summary</label>
                        <input type="text" className="form-control" 
                        id = "summary"
                        name = "summary"
                        value = {location.summary}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>About</label>
                        <input type="text" className="form-control" 
                        id = "about"
                        name = "about"
                        value = {location.about}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Description</label>
                        <input type="text" className="form-control" 
                        id = "description"
                        name = "description"
                        value = {location.description}
                        readOnly />
                    </div>
                </div>
            </div> */}

            {/* <div className='mb-3'>
                <h4>Resistences</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Fire</label>
                        <input type="text" className="form-control" 
                        id = "fire"
                        name = "fire"
                        value = {location.resistances.fire}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Water</label>
                        <input type="text" className="form-control" 
                        id = "water"
                        name = "water"
                        value = {location.resistances.water}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Ice</label>
                        <input type="text" className="form-control" 
                        id = "ice"
                        name = "ice"
                        value = {location.resistances.ice}
                        readOnly />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Thunder</label>
                        <input type="text" className="form-control" 
                        id = "thunder"
                        name = "thunder"
                        value = {location.resistances.thunder}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Dragon</label>
                        <input type="text" className="form-control" 
                        id = "dragon"
                        name = "dragon"
                        value = {location.resistances.dragon}
                        readOnly />
                    </div>
                </div>
            </div> */}
           
            {/* <div className='mb-3'>
                <h4>Skills</h4>
                <hr></hr>
                {location.skills.length == 0 ?
                    <div>
                        <p>No skills found</p>
                    </div>
                    :<SkillsDetail skills = {location.skills} />
                }
            </div> */}

            {/* <p><strong>Zones:</strong> {location.zoneCount}</p>
            <p><strong>Quests:</strong> {location.quests}</p>
            <p><strong>Hazards:</strong> {location.hazards}</p> */}

        </>
    );

}