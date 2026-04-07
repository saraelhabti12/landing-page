import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  data: Service[];
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Notre Méthode</span>
          <h2>Le Moteur de <span>Filtration</span></h2>
          <p>Une approche en trois piliers pour sécuriser votre croissance et filtrer les meilleures opportunités.</p>
        </div>

        <div className="services-grid">
          {data.map((service, index) => (
            <div key={index} className="pillar-card">
              <span className="pillar-num">PILIER 0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
