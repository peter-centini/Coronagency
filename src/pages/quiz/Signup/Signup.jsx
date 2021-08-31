import React, { useState } from 'react';
import './Signup.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const test = (data) => {
    alert(JSON.stringify(...data));
  };

  let history = useHistory();
  const { register, handleSubmit, handleChange } = useForm();
  const [formAll, setFormAll] = useState({
    name: '',
    email: '',
    password: '',
  });

  const createUser = (data) => {
    axios
      .post(
        'https://cors-anywhere.localhost:8000/api/users',
        {
          method: 'POST', // The method
          mode: 'no-cors', // It can be no-cors, cors, same-origin
          credentials: 'same-origin', // It can be include, same-origin, omit
          headers: {
            'Content-Type': 'application/json', // Your headers
          },
        },
        { ...data }
      )
      .catch(function (err) {
        console.log('error');
      })
      .then(console.log('success'));
  };

  const validation = () => {
    history.push('/quizz/login');
  };

  const next = () => {
    createUser();
    validation();
  };


  return (
    <div className="signUpLoginBoxQuiz1">
        <form className="form1" onSubmit={handleSubmit(validation)}>
          <div className="form-username1">
            <label name="name">Choisir un nom d'utilisateur</label>
            <input className="input1"
              {...register('name', { required: true })}
              placeholder="thierry"
              name="name"
              onChange={handleChange}
            />
            <label className="label1" name="username">Confirmer votre nom d'utilisateur</label>
            <input
              {...register('name', { required: true })}
              placeholder="thierry"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label name="email">Entrer votre e-mail</label>
            <input
              {...register('email', { required: false })}
              placeholder="thierry@contact.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-password1">
            <label name="password">Choisir un mot de passe</label>
            <input
              {...register('password', { required: true })}
              placeholder="mot de passe"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <label name="password">Confirmer votre mot de passe</label>
            <input
              {...register('password', { required: true })}
              placeholder="Confirmation du mot de passe"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="submit1" />
        </form>
      </div>
    // </div>
  );
};

export default Signup;
