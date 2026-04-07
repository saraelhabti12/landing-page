import React from 'react';
import { Play } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

interface TestimonialsProps {
  data: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Preuves</span>
          <h2>Ce qu'ils <span>Disent</span></h2>
          <p>Écoutez les résultats réels de nos partenaires.</p>
        </div>

        <div className="testimonials-list">
          {data.map((testimonial, index) => (
            <div key={index} className="testimonial-row">
              <div className="audio-btn">
                <Play size={20} fill="currentColor" />
              </div>
              <div className="testimonial-text">
                <h4>{testimonial.name}</h4>
                <p>"{testimonial.comment.substring(0, 100)}..."</p>
              </div>
              <div className="status-tag">
                Audio 0:34
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
