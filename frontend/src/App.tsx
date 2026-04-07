import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

const pageData = {
  hero: {
    title: "Build your next big idea with confidence",
    description: "The all-in-one platform to design, deploy, and scale your digital products without the overhead of traditional infrastructure.",
    buttonText: "Start Building for Free",
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  services: [
    {
      title: "Lightning Fast",
      description: "Deploy your applications in seconds with our optimized global edge network.",
      icon: "zap"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to keep your data safe.",
      icon: "shield"
    },
    {
      title: "Real-time Analytics",
      description: "Deep insights into your users' behavior with built-in analytics dashboard.",
      icon: "chart"
    }
  ],
  testimonials: [
    {
      name: "Sarah Chen",
      role: "CEO at TechFlow",
      comment: "This platform has completely transformed how our team builds products. We've seen a 40% increase in deployment speed since switching.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Marcus Wright",
      role: "Lead Designer at CreativeScale",
      comment: "The cleanest UI I've ever worked with. It makes complex infrastructure feel like child's play. Highly recommended for modern teams.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    }
  ]
};

function App() {
  return (
    <div className="app-wrapper">
      {/* Global Background System */}
      <div className="global-bg">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-glow-3"></div>
      </div>

      <main>
        <Hero data={pageData.hero} />
        <Services data={pageData.services} />
        <Testimonials data={pageData.testimonials} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
