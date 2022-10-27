import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import './styles.css';

export const CardGroup = ({ groupName, membersNumber, localName, dateRange, price, isFavorite }) => {
    const [isFavorte, setIsFavorite] = useState(isFavorite);
    const handleClick = () => {
      navigate("/detalhes")
    };
    const navigate = useNavigate();
 
    return (
        <Card className='cardSpacing' onClick={() => handleClick()}>
        <Card.Img variant="top" src="https://www.larahotel.com.br/wp-content/uploads/lara_hotel-homepage-Hotel-1551.jpg" />
        <Card.Body>
          <div className='header-my'>
            <Card.Title className='align-text-bottom'>{groupName}</Card.Title>
            <button type="button" class="btn btn-link" onClick={() => setIsFavorite(!isFavorte)}>
              { isFavorte ? <StarFill size={24} /> : <Star size={24} />}
            </button>
          </div>
          <Card.Subtitle className='subtitleSpacing'>{membersNumber} Integrantes</Card.Subtitle>
          <Card.Title >{localName}</Card.Title>
          <Card.Subtitle className='subtitleSpacing'>{dateRange}</Card.Subtitle>
          <Card.Text className='priceSpacing'>{`R$${price} por noite`}</Card.Text>
        </Card.Body>
      </Card>
    )
}