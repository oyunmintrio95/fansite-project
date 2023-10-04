export default function LocationCard({location}){
    return (
        <div className='col'>
            <div className='card h-100'>
                <div>

                </div>
                <div className='card-body'>
                    <h2 className='card-title fs-4'>Name: {location.name} </h2>
                    <h3 className='card-subtitle fs-5 mb-2 text-body-secondary'>Type: {location.type}</h3>
                    <ul className='card-text'>
                        <li>ID: {location.id}</li>
                        <li>Name: {location.name}</li>
                        <li>Zones: {location.zoneCount}</li>
                        <li>Camps: {location.camps}</li>
                    </ul>
                </div>

            </div>
        </div>
        
    );

}

// {
//     "id": 1,
//     "name": "Ancient Forest",
//     "zoneCount": 16,
//     "camps": [
//         {
//             "id": 1,
//             "name": "Southwest Camp",
//             "zone": 1
//         },
//         {
//             "id": 2,
//             "name": "Northwest Camp",
//             "zone": 8
//         },
//         {
//             "id": 3,
//             "name": "Northeast Camp",
//             "zone": 11
//         },
//         {
//             "id": 4,
//             "name": "Ancient Forest Camp",
//             "zone": 17
//         }
//     ]
// }