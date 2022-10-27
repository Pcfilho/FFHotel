import React from 'react';
import { MenuClean } from '../../components/MenuClean';
import './styles.css';
export const Cadastro = () => {
  return (
    <div className="conteiner">
      <MenuClean />
      <div className='telaCadastro'>
        <h1 className="tittle">Preencha com os dados abaixo!</h1>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="Nome Completo" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="CPF" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="Cidade/Estado" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="Telefone" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text" id="basic-addon1"></span>
          <input type="text" class="form-control" placeholder="Confirmar Senha" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-light">
            <spam class="button">Registrar</spam>
          </button>
        </div>
      </div>
    </div>

  );

}