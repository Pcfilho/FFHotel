import React from  'react';
import { Image } from 'react-bootstrap';
import './styles.css';

export const ChatCard = ({ name, message, img}) => {
    return (
        <div className='my-card'>
        <div className='my-image'>
            <Image
                width={80}
                height={100}
                src={img}
            />
        </div>
        <div className='my-card-content'>
            <div className='my-name'>
                <h4>{name}</h4>
            </div>
            <div>
                <p>
                    {message}
                </p>
            </div>
        </div>
    </div>
    );
}