import React from 'react';
import { Form, Image, InputGroup } from 'react-bootstrap';
import { PeopleFill, SendFill } from 'react-bootstrap-icons';
import { ChatCard } from '../../components/ChatCard';
import { MenuClean } from '../../components/MenuClean';
import './styles.css'

export const GroupChat = () => {
    return (
        <div className='my-container'>
            <div className='navbar'>
                <MenuClean />
            </div>
            <div className='my-content'>
                <div className='my-left'>
                    <h1 className='my-text'>Viagem Atibaia</h1>
                    <div className="my-cards">
                        <h6 className='my-text'>Integrantes 4/4</h6>
                        <div className='my-card mb-3'>
                            <div className='my-image'>
                                <Image
                                    width={100}
                                    height={120}
                                    src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                                />
                            </div>
                            <div className='my-card-content'>
                                <div className='my-name'>
                                    <h2>Maria</h2>
                                </div>
                                <div>
                                    <p>
                                        Gosto muito de ir em festas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='my-card mb-3'>
                            <div className='my-image'>
                                <Image
                                    width={100}
                                    height={120}
                                    src={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
                                />
                            </div>
                            <div className='my-card-content'>
                                <div className='my-name'>
                                    <h2>João</h2>
                                </div>
                                <div>
                                    <p>
                                        Gosto muito de ir em festas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='my-card mb-3'>
                            <div className='my-image'>
                                <Image
                                    width={100}
                                    height={120}
                                    src={'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                                />
                            </div>
                            <div className='my-card-content'>
                                <div className='my-name'>
                                    <h2>Felipe</h2>
                                </div>
                                <div>
                                    <p>
                                       Adoro viajar...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='my-card mb-3'>
                            <div className='my-image'>
                                <Image
                                    width={100}
                                    height={120}
                                    src={'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                                />
                            </div>
                            <div className='my-card-content'>
                                <div className='my-name'>
                                    <h2>Carlos</h2>
                                </div>
                                <div>
                                    <p>
                                        Vivendo e viajando!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-buttons">
                        <button type="button" class="btn btn-outline-light mb-4" >
                            <PeopleFill />
                            <span>Solicitações</span>
                        </button>
                        <button type="button" class="btn btn-danger">
                            <span>Sair</span>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="my-cards">


                    <ChatCard name="João" message="Eae galera, tudo certo para a viagem?" img="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <ChatCard name="Carlos" message="Por mim, tudo OK, e para você Felipe?" img="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <ChatCard name="Felipe" message="Opa, meu chefe adiou minhas ferias em 2 dias..." img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <ChatCard name="Maria" message="xiii 😒" img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    </div>
                    

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Digite algo"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">
                            <SendFill />
                        </InputGroup.Text>
                    </InputGroup>
                </div>

            </div>

        </div>
    )
}