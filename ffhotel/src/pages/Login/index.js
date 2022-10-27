import React from "react";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Google, Lock, LockFill, PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.cardazul}>
                <h2 className={styles.bemvindo}>Bem-Vindo!</h2>
                <br></br>
                <h2 className={styles.bemvindo}>Se você não</h2>
                <h2 className={styles.bemvindo}>possui</h2>
                <h2 className={styles.bemvindo}>cadastro</h2>
                <h2 className={styles.bemvindo}>faça agora!</h2>
                <br></br>
                <button className={styles.bcadastrese} onClick={() => navigate('/cadastro')}>
                    <p className={styles.cadastrese}>Cadastre-se</p>
                </button>
            </div>
            <div className={styles.right}>
                <div className={styles.logo} onClick={() => navigate('/')}>

                </div>
                <div className={styles.inputs}>

                    <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                            <PersonFill />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Email"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <LockFill />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Senha"
                            aria-label="Data de entrada"
                            aria-describedby="basic-addon1"
                            type="password"
                        />
                    </InputGroup>
                </div>
                <div>
                    <button className={styles.google}>
                        <Google />
                        <span className={styles.googleTitle}>Entrar com Google</span>
                    </button>
                </div>
                <div>
                    <button className={styles.entrar}>
                        <p className={styles.entrarinbotao}>Entrar</p></button>
                </div>
            </div>
        </div>
    )
}