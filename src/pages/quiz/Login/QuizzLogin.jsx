import React from 'react';
import { Link } from 'react-router-dom';
import './QuizzLogin.css';
import virus from '..//..//../images/virus.png'

const Login = () => {
  return (
    <div className="signUpLoginBoxQuiz">
      <div className="slContainer">
        <form className="form">
          <input
            type="text"
            placeholder="pseudo"
            className="connection-pseudo"
          />
          <input
            className="connection-mdp"
            type="password"
            placeholder="mot de passe"
          />
          <Link 
          to={{ pathname: '/quizz/start' }} 
          className="valide">
            {' '}
            Connexion
          </Link>
        </form>
      </div>
      <img 
      className="connection-virus"
      src={virus} 
      alt="virus" />
      <img 
      className="connection-virus-2"
      src={virus} 
      alt="virus" />
    </div>
  );
};

export default Login;
