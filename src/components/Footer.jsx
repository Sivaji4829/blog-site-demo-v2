import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4 className="fw-bold text-white">KIRAN & ASSOCIATES</h4>
            <p className="text-white-50">Your trusted partners for all your accounting, tax, and compliance needs in Guntur.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white">Contact Info</h5>
            <ul className="list-unstyled text-white-50">
              <li><i className="bi bi-geo-alt-fill me-2 text-danger-custom"></i>123 Tax Office Rd, Guntur, AP</li>
              <li><i className="bi bi-telephone-fill me-2 text-danger-custom"></i>+91 98765 43210</li>
              <li><i className="bi bi-envelope-fill me-2 text-danger-custom"></i>contact@kiranassociates.com</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white">Follow Us</h5>
            <a href="#" className="text-white-50 me-3 fs-4 social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white-50 me-3 fs-4 social-icon"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white-50 me-3 fs-4 social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-white-50 fs-4 social-icon"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center text-white-50">
          <p>&copy; {new Date().getFullYear()} KIRAN & ASSOCIATES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
