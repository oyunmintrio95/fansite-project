export default function LocationCard({location}){
    return (
        <div className='col'>
            <div className='card h-100'>
                <div>

                </div>
                <div className='card-body'>
                    <h2 className='card-title fs-4'>{location.name}</h2>
                    <p><strong>Category:</strong> {location.category}</p>
                    <p><strong>Type:</strong> {location.type}</p>
                    <p><strong>Zones:</strong> {location.zoneCount}</p>
                    <p><strong>Quests:</strong> {location.quests}</p>
                    <p><strong>Hazards:</strong> {location.hazards}</p>
                </div>
            </div>
        </div>
        
    );

}