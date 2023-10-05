export default function WeaponCard({weapon}){
    return (
        <div className='col'>
            <div className='card h-100'>
                <div className='card-body'>
                    <div>
                    <img
						className='card-img-top'
						style={{ height: '250px', objectFit: 'cover' }}
						src={weapon.assets}
						alt="weapon-img"
					/>
                    </div>
                    <h2 className='card-title fs-4'>Name: {weapon.name}</h2>
                    <h3 className='card-subtitle fs-5 mb-2 text-body-secondary'>Type: {weapon.type}</h3>
                    <ul className='card-text'>
                        <li>Damage Type: {weapon.damageType}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    );

}