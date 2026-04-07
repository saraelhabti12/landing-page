import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
    videoPlaceholderUrl: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="hero">
      <div className="hero-glow" />
      
      <div className="hero-content container">
        <span className="section-tag">Autorité n°1 en Croissance</span>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <div className="video-wrapper">
          <div className="video-container">
            <img 
              src={data.videoPlaceholderUrl} 
              alt="Strategic Preview" 
              className="video-placeholder"
            />
            <div className="play-button-large">
              <Play size={40} fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="cta-group">
          <button className="btn-main">
            {data.buttonText}
          </button>
          <span className="btn-sub">Réservez votre appel stratégique</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
