import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="quiz-container">
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          
          <div className="quiz-step">
            <span className="section-tag">Étape 1 sur 5</span>
            <h2>Quel est votre <span>Objectif</span> Principal ?</h2>
            
            <div className="quiz-options">
              <div className="quiz-opt">Générer plus de Leads</div>
              <div className="quiz-opt">Augmenter mon Autorité</div>
              <div className="quiz-opt">Automatiser mes Ventes</div>
              <div className="quiz-opt">Scale mon Agence</div>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <button className="btn-main">Continuer →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
