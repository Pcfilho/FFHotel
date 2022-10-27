import React from "react";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Envelope, GeoAltFill, PersonCircle, PersonFill, TelephoneFill } from "react-bootstrap-icons";
import styles from "./styles.module.css"
import './styles.css';
import { MenuClean } from "../../components/MenuClean";

export const Editarperfil = () => {
    return (
        <div className={styles.highcontainer}>
            <div className={styles.navbar}>
                <MenuClean />
            </div>


            <div className={styles.container}>


                <div className={styles.cardazul}>
                    <h1 className={styles.cardazultitle}>Editar Perfil</h1>
                    <div className={styles.cardazulcontainer}>
                        <PersonCircle className="mb-5" size={300} />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <PersonFill />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Nome"
                                aria-label="Data de entrada"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control as="textarea" rows={4} placeholder="Escreva sobre você" />
                        </InputGroup>

                    </div>
                </div>
                <div className={styles.right}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <Envelope />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Email"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <PersonFill />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="CPF"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <GeoAltFill />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Estado/cidade"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <TelephoneFill />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Telefone"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div>
                        <p>Atenção! Só será possível alterar os dados novamente a cada 90 dias e somente fora de viagens</p>
                    </div>
                    <div>
                        <button className={styles.bconfirmar}>
                            <p className={styles.confirmar}>Confirmar</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}