import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import NavBarOff from '../../../shared/components/NavBarOff';
import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(email);
  };

  return (
    <>
      <Header />
      <NavBarOff />
      <main>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          ></input>
          <label>Senha:</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
          <label>Confirme a senha:</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          ></input>
          <label>Nome do personagem:</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value.trim())}
          ></input>
          <label>Gênero:</label>
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value='' disabled>
              Selecione
            </option>
            <option value='Male'>Masculino</option>
            <option value='Female'>Feminino</option>
          </select>
          <label>Raça:</label>
          <select value={breed} onChange={e => setBreed(e.target.value)}>
            <option value='' disabled>
              Selecione
            </option>
            <option value='Vampire'>Vampiro</option>
            <option value='Werewolf'>Lobisomem</option>
          </select>
          <br />
          <br />
          <small>
            Ao criar meu personagem, afirmo que LI e CONCORDO com todos Termos
            de Serviço e Regras
          </small>
          <br />
          <button
            type='submit'
            disabled={
              !email ||
              !password ||
              !confirmPassword ||
              !name ||
              !gender ||
              !breed
            }
          >
            Transformar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default RegisterPage;
