import {Link} from 'react-router-dom';

export default function AboutCard({about}){
    return(
        <div className='col'>
            <div className='card h-100'>
                <div>
                    <img 
                    className='card-img-top'
                    style={{height: '200px', objectFit: 'contain', borderRadius: '10px'}}
                    src= 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-barioth_render_002.png' alt='headshot' />
                </div>
                <div className='card-body'>
                    <h1 className='card-title text-center fs-3 mb-2'>{`${about.firstName} ${about.lastName}`} </h1>
                    <p className='card-subtitle fs-6 mb-2 text-body-secondary'>{about.aboutDescription}</p>


                    <div className='d-flex justify-content-end'>
                    <a className='btn btn-primary' href={`https://${about.git}`} target="_blank">Git</a>
                    </div>
                </div>
            </div>
        </div>
    );
}