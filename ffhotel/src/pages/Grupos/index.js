import React from 'react';
import "./style.css"
import { Menu } from '../../components/Menu';
import { CardGroup } from '../../components/CardGroup';

export const Grupos = () => {
    return (
        <div>
            <div className='navbar'>
                <Menu />
            </div>
            <div className='content'>
                <div className='conteiner'>
                    <h1 className='tittle'>
                        Meus Grupos
                    </h1>

                    <div className="list">
                        <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                        <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                        <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                    </div>

                    <h1 className='tittle3'>
                        Solicitações Pendentes
                    </h1>

                    <p className='subtittle'>
                        Você não possui solicitações pendentes...✉
                    </p>
                </div>

                <div className='conteiner2'>
                    <h1 className='tittle2'>
                        Grupos Disponiveis
                    </h1>
                    <div className="list2">
                        <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                        <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                        <CardGroup groupName="Viagem Atibaia" membersNumber={5} localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" isFavorite={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}












