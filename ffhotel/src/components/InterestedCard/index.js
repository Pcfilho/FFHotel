import React from 'react';
import { Image } from 'react-bootstrap';
import './styles.css';

export const InterestedCard = ({ name, image }) => {
    return (
        <div className='container'>
            <div className='image'>
                <Image
                    width={100}
                    height={120}
                    src={image}
                />
            </div>
            <div className='content'>
                <div className='name'>
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>
                        Gosto muito de ir em festas
                    </p>
                </div>
            </div>
        </div>
    )
}