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

    const {locationId} = useParams();
    const locationData = data.locations.find((item) => item.id == locationId);

    
    console.log(locationData.name);
    console.log(locationData);

    const hazards = locationData.hazards.join(', ');
    const quests = locationData.quests.join(', ');
    const monsters = locationData.monsters.join(', ');
    const materials = locationData.materials.join(', ');
    const locationMaps = locationData.maps;
    console.log(locationMaps);

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

            <div className='mb-3' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

                <img src={locationData.images[0].url}/>
            </div>
            <div key={locationData.id}>
                <h1>{locationData.name}</h1>
            </div>
            <hr></hr>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>Type</label>
                    <input type="text" className="form-control"
                        id="type"
                        name="type"
                        value={locationData.type}
                        readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Category</label>
                    <input type="text" className="form-control"
                        id="category"
                        name="category"
                        value={locationData.category}
                        readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rarity</label>
                    <input type="text" className="form-control"
                        id="rarity"
                        name="rarity"
                        value={locationData.rarity}
                        readOnly />
                </div>
            </div>
            <hr></hr>
            <div className='mb-3'>
                <h4>Information</h4>
                
                <div className='row'>
                    <div className='form-group'>
                        <label className='form-label mt-4'>Summary</label>
                        <textarea className="form-control"
                            id="summary"
                            name="summary"
                            rows="3"
                            value={locationData.summary}
                            readOnly />
                    </div>
                    <div className='form-group'>
                        <label className='form-label mt-4'>About</label>
                        <textarea className="form-control"
                            id="about"
                            name="about"
                            rows="3"
                            value={locationData.about}
                            readOnly />
                    </div>
                    <div className='form-group'>
                        <label className='form-label mt-4'>Description</label>
                        <textarea className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            value={locationData.description}
                            readOnly />
                    </div>

                </div>
            </div>

            <p><strong>Zones:</strong> {locationData.zoneCount}</p>
            <p><strong>Quests:</strong> {quests}</p>
            <p><strong>Materials:</strong> {materials}</p>
            <p><strong>Hazards:</strong> {hazards}</p>
            <p><strong>Monsters:</strong> {monsters}</p>
            <hr></hr>
            <div className='row mb-3'>
            <h4>Maps</h4>
                {locationMaps.map(locationMap => {
                    console.log(locationMap);
                    return (
                        
                            <div className='col'>
                                <img
                                    width="300px"
                                    src={`${locationMap}`}
                                    // alt='this is a map' 
                                />
                            </div>
                        
                    )
                })}

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




        </>
    );

}