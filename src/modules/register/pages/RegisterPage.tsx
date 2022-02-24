import createUserService from '../services/CreateUserService';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import ICreateUser from '../interfaces/ICreateUser';
import loaderService from '../../../shared/services/LoaderService';
import modalService from '../../../shared/services/ModalService';
import NavBar from '../../../shared/components/NavBar';
import React, { useState } from 'react';
import routes from '../../../routes/routes';
import translate from '../../../translate/translate';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [breed, setBreed] = useState('');
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      showModal(translate.register.messageError1);
      return;
    }
    requestCreateUser({
      email: email,
      password: password,
      name: name,
      gender: gender,
      breed: breed,
    });
  };

  const requestCreateUser = async (crateUser: ICreateUser) => {
    showLoading();
    await createUserService(crateUser)
      .then(response => {
        showModal(response.message as string);
        navigate(routes.login);
      })
      .catch(error => {
        if (error.validation) {
          showModal(error.validation.body.message);
          return;
        }
        showModal(error.message);
      })
      .finally(() => hideLoading());
  };

  return (
    <>
      <Header />
      <NavBar />
      <main>
        <h1 className='text-center'>{translate.register.title}</h1>
        <form onSubmit={handleSubmit}>
          <label>{translate.register.inputEmail}</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          ></input>
          <label>{translate.register.inputPassword}</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
          <label>{translate.register.inputConfirmPassword}</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          ></input>
          <label>{translate.register.inputName}</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value.trim())}
          ></input>
          <label>{translate.register.inputGender}</label>
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value='' disabled>
              {translate.register.inputGenderOption1}
            </option>
            <option value='Male'>
              {translate.register.inputGenderOption2}
            </option>
            <option value='Female'>
              {translate.register.inputGenderOption3}
            </option>
          </select>
          <label>{translate.register.inputBreed}</label>
          <select value={breed} onChange={e => setBreed(e.target.value)}>
            <option value='' disabled>
              {translate.register.inputBreedOption1}
            </option>
            <option value='Vampire'>
              {translate.register.inputBreedOption2}
            </option>
            <option value='Werewolf'>
              {translate.register.inputBreedOption3}
            </option>
          </select>
          <br />
          <br />
          <small>{translate.register.detail1}</small>
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
            {translate.register.button}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default RegisterPage;
