import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import data from '../../data/locations.json';
import imageph from '../../image/image-ph.jpg';
import mapph from '../../image/map-ph.jpg';

const INITIAL_LOCATION = {
    id: 0,
    name: "test",
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

export default function LocationDetail() {

    const { locationId } = useParams();

    const locationData = data.locations.find((item) => item.id == locationId);

    console.log(locationData.name);
    console.log(locationData);


    function phCheck(imgFileName) {
        switch (imgFileName) {
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

    const navigate = useNavigate();

    return (
        <>

            <div key={locationData.id}>
                <h1>{locationData.name}</h1>
            </div>




            <div className='mb-3'>
                <label className='form-label'>Name</label>
                    <input type="text" className="form-control" 
                    id = "name"
                    name = "name"
                    value = {locationData.name}
                    readOnly />
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>Type</label>
                    <input type="text" className="form-control" 
                    id = "type"
                    name = "type"
                    value = {locationData.type}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Category</label>
                    <input type="text" className="form-control" 
                    id = "category"
                    name = "category"
                    value = {locationData.category}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rarity</label>
                    <input type="text" className="form-control" 
                    id = "rarity"
                    name = "rarity"
                    value = {locationData.rarity}
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
                        value = {locationData.summary}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>About</label>
                        <input type="text" className="form-control" 
                        id = "about"
                        name = "about"
                        value = {locationData.about}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Description</label>
                        <input type="text" className="form-control" 
                        id = "description"
                        name = "description"
                        value = {locationData.description}
                        readOnly />
                    </div>
                </div>
            </div> 

             {/* <div className='mb-3'>
                <h4>Resistences</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Fire</label>
                        <input type="text" className="form-control" 
                        id = "fire"
                        name = "fire"
                        value = {locationData.resistances.fire}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Water</label>
                        <input type="text" className="form-control" 
                        id = "water"
                        name = "water"
                        value = {locationData.resistances.water}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Ice</label>
                        <input type="text" className="form-control" 
                        id = "ice"
                        name = "ice"
                        value = {locationData.resistances.ice}
                        readOnly />
                    </div>
                </div> */}
                {/* <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Thunder</label>
                        <input type="text" className="form-control" 
                        id = "thunder"
                        name = "thunder"
                        value = {locationData.resistances.thunder}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Dragon</label>
                        <input type="text" className="form-control" 
                        id = "dragon"
                        name = "dragon"
                        value = {locationData.resistances.dragon}
                        readOnly />
                    </div>
                </div> */}
            {/* </div>  */}

             <div className='mb-3'>
                <h4>Skills</h4>
                <hr></hr>
                {/* {locationData.skills.length == 0 ?
                    <div>
                        <p>No skills found</p>
                    </div>
                    :<SkillsDetail skills = {locationData.skills} />
                } */}
            </div>

            <p><strong>Zones:</strong> {locationData.zoneCount}</p>
            <p><strong>Quests:</strong> {locationData.quests}</p>
            <p><strong>Hazards:</strong> {locationData.hazards}</p>

        </>
    );

}