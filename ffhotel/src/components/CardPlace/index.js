import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export const CardPlace = ({ localName, dateRange, price }) => {
  const handleClick = () => {
    navigate("/detalhes")
  };
  const navigate = useNavigate();

    return (
        <Card className='cardSpacing' onClick={() => handleClick()}>
        <Card.Img variant="top" src="https://i0.wp.com/blogandarilho.com.br/wp-content/uploads/2017/06/Laguna-Blu-12.jpg?fit=900%2C600&ssl=1" />
        <Card.Body className='body'>
          <Card.Title className='mb-3' >{localName}</Card.Title>
          <Card.Subtitle className='mb-3'>{dateRange}</Card.Subtitle>
          <Card.Text className='mb-3'>{`R$${price} por noite`}</Card.Text>
        </Card.Body>
      </Card>
    )
}