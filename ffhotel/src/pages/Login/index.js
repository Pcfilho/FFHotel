import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css"

export const Login = () => {
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
                <button className={styles.bcadastrese}>
                    <p className={styles.cadastrese}>Cadastre-se</p>
                </button>
            </div>
            <div className={styles.right}>
                <div className={styles.logo}>

                </div>
                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1"></input>
                </div>

                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1"></input>
                </div>
                <div>
                    <button className={styles.google}>Sign in with Google</button>
                </div>
                <div>
                    <button className={styles.entrar}>
                        <p className={styles.entrarinbotao}>Entrar</p></button>
                </div>
            </div>
        </div>
    )
}