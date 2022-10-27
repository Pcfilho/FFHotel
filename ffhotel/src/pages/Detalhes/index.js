import React, { useEffect, useState } from 'react';
import { InputGroup, Form, Button, Figure, Pagination } from 'react-bootstrap';
import { Menu } from '../../components/Menu';
import { Star, StarFill, ArrowRight, ArrowLeft, PersonFill, Person } from 'react-bootstrap-icons';
import Image from 'react-bootstrap';
import './styles.css'
import { InterestedCard } from '../../components/InterestedCard';
import { useNavigate } from 'react-router-dom';



export const Detalhes = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();
    const [active, setActive] = useState(1);
    const handleClick = (url) => navigate(url);
    const items = [1, 2, 3];
    const images = ['https://www.larahotel.com.br/wp-content/uploads/lara_hotel-homepage-Hotel-1551.jpg', 'https://i0.wp.com/blogandarilho.com.br/wp-content/uploads/2017/06/Laguna-Blu-12.jpg?fit=900%2C600&ssl=1', 'http://d2t6k95walcly3.cloudfront.net/unsafe/840x460/anuncios/casa-prainha-pousada-aquiraz-ceara-55a55074b559d.jpg']

    return (
        <div className='container'>
            <div className='navbar'>
                <Menu />
            </div>

            <div className='content-container'>

                <div className='header'>
                    <div className='header-top'>
                        <h1>Prainha, Aquiraz</h1>
                        <button type="button" class="btn btn-link" onClick={() => setIsFavorite(!isFavorite)}>
                            {isFavorite ? <StarFill size={24} /> : <Star size={24} />}
                        </button>
                    </div>
                    <p>Ceará, Brazil</p>
                </div>

                <div className='content'>
                    <div className='pic-box'>
                        <div className='images'>
                            <Figure>
                                <Figure.Image
                                    width='100%'
                                    height='100%'
                                    alt="171x180"
                                    src={images[active - 1]}
                                />
                            </Figure>
                            <Pagination className='pages'>
                                {
                                    items.map(number =>
                                        <Pagination.Item key={number} active={number === active} onClick={() => { setActive(number) }}>
                                            {number}
                                        </Pagination.Item>)
                                }
                            </Pagination>
                        </div>
                        <div className='yellow-box-parente'>
                            <div className='reserve-container'>
                                <span className='price-per-night'>Preço por noite</span>
                                <span className='mt-3 mb-3'><h1>R$190.00</h1> </span>
                                <div className='inputs-group'>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <ArrowRight />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Data de entrada"
                                            aria-label="Data de entrada"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <ArrowLeft />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Data de saida"
                                            aria-label="Data de saida"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <PersonFill />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Quantidade de pessoas"
                                            aria-label="Quantidade de pessoas"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Button className="mb-3" variant="primary" onClick={() => handleClick('/grupos')}>Ver grupos</Button>
                                    <Button className="mb-3" variant="primary" onClick={() => handleClick('/grupo')}>Criar grupo</Button>
                                    <Button className="mb-3" variant="primary" onClick={() => handleClick('/')}>Reservar</Button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='description-container'>
                    <span>
                        <h2>Descrição</h2>
                    </span>
                    <div className='description-text'>
                        O Hay Beach é um apartamento de Luxo, smart, todo automatizado, a 10 km do Beach Park, Beira Mar, PÉ NA AREIA, totalmente equipado e estruturado com móveis e utensílios em geral. Tudo isso para proporcionar uma excelente experiência para você e sua familía. O Hay Beach também dispoe de Piscina ao ár livre, Sauna, Academia, Sala de Jogos, Brinquedoteca, Salão de Eventos, Playground e muito mais. Aqui você encontra praticamente tudo para uma excelente estadia. Venha conhecer e aproveitar as belezas do Ceará e da praia de Porto das Dunas. Região totalmente segura com várias opções de restaurantes, supermercados e passeios.
                    </div>
                </div>

                <div className='interested-container'>
                    <div>
                        <h2>Interessados</h2>
                    </div>
                    <div>
                        <InterestedCard name='Joao' image='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' desc="Gosto muito de ir em festas"/>
                        <InterestedCard name='Carlos'image='https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' desc="Vivendo e viajando!"/>
                        <InterestedCard name='Maria' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'desc="Gosto muito de ir em festas"/>
                        <InterestedCard name='Felipe' image='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' desc="Adoro viajar..."/>
                    </div>
                </div>                   
            </div>

        </div>
    )
};