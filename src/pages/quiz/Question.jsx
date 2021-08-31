import React, { useState } from 'react';
import './Question.scss';

function Question({ question }) {

  const [coche, setCoche] = useState({});
  const handleChange = () => {
    setCoche(!coche);
  };
  
  return (
    <div className="Question">
      <div className="progress">
        <div className="progress-question">Question: {question.id}</div>
        <div className="progress-pourcent">pourcentage</div>
      </div>
      <h3>{question.question}</h3>
      <div className="reponse">
        <label name="reponse1">
          <input
            type="radio"
            id="reponse1"
            checked={coche}
            onClick={handleChange}
          />
          {question.reponse1}
        </label>

        <label name="reponse2">
          <input
            type="radio"
            id="reponse2"
            checked={coche}
            onClick={handleChange} 
          />
          {question.reponse2}
        </label>
        <label name="reponse3">
          <input
            type="radio"
            id="reponse3"
            checked={coche}
            onClick={handleChange}
          />
          {question.reponse3}
        </label>
        <label name="reponse4">
          <input type="radio" 
          checked={coche} 
          onClick={handleChange}
           />
          {question.reponse4}
        </label>
        
      </div>
    </div>
  );
}

export default Question;
