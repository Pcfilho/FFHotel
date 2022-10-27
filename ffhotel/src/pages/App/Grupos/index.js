import React from 'react';
import "./style.css"
import { Menu } from '../../../components/Menu';
import { CardPlace } from '../../../components/CardPlace';

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
                        <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                        <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                        <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
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
                        <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                        <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                        <CardPlace localName="Prainha, Aquiraz" dateRange="02-10 Novembro/22" price="190" />
                        </div>

                </div>

            </div>

        </div >















    )
}












