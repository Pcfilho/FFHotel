import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { CardGroup } from '../../components/CardGroup';
import { CardPlace } from '../../components/CardPlace';
import { Menu } from '../../components/Menu';
import './styles.css'

export const Home = () => {
    return (
        <div>
            <div className='navbar'>
                <Menu />
            </div>
            <div className='content-my'>
                <div className='accordion'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Grupos</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <span>Viagem Atibaia</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Favoritos</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="list-my">
                    <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                    <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />

                </div>
            </div>
        </div>
    );
};