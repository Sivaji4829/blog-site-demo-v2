import React from 'react';
import RaviKiranImage from '../assets/ravi-kiran.png'; // Make sure to add this image to src/assets

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
            <p className="text-danger-custom fw-bold text-uppercase small-heading">Our Commitment to Excellence</p>
            <h2 className="section-title">Empowering Businesses for Success</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={RaviKiranImage} className="img-fluid rounded shadow-lg mb-4 mb-lg-0" alt="Garlapati Ravi Kiran" />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold">Garlapati Ravi Kiran, <span className="text-muted h5">B.Com, CA(Inter)</span></h3>
            <p className="text-secondary">
              With extensive experience in tax consultancy and financial advisory, Ravi Kiran is a cornerstone of our firm. His expertise in navigating complex tax laws helps businesses achieve compliance and optimize their financial strategies.
            </p>
            <blockquote className="blockquote fst-italic mt-3 border-start border-danger border-3 ps-3">
              "Success is a journey, not a destination. We are here to guide you every step of the way."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
