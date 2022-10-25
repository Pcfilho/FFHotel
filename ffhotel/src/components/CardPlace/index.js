import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './styles.css';

export const CardPlace = ({ localName, dateRange, price }) => {
    return (
        <Card className='cardSpacing'>
        <Card.Img variant="top" src="https://www.larahotel.com.br/wp-content/uploads/lara_hotel-homepage-Hotel-1551.jpg" />
        <Card.Body>
          <Card.Title >{localName}</Card.Title>
          <Card.Subtitle className='subtitleSpacing'>{dateRange}</Card.Subtitle>
          <Card.Text className='priceSpacing'>{`R$${price} por noite`}</Card.Text>
        </Card.Body>
      </Card>
    )
}