import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css"

export const Editarperfil = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardazul}>
                <h1>Editar Perfil</h1>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="260.22px" height="240px" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1"></input>
                </div>
                    <textarea  rows="5" cols="12" placeholder="Conte mais sobre você"></textarea>
                </div>
                
            </div>
            <div className={styles.right}>
                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1"></input>
                </div>

                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1"></input>
                </div>

                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Cidade/Estado" aria-label="Cidade/Estado" aria-describedby="basic-addon1"></input>
                </div>

                <div class="input-group mb-3" className={styles.card}>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1"></input>
                </div>
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
    )
}