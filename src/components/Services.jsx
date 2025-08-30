import React from 'react';

const servicesData = [
    { icon: 'bi-receipt', title: 'GST Services', description: 'Registration, Returns, Refunds & Notices.' },
    { icon: 'bi-calculator', title: 'Income Tax', description: 'Comprehensive IT Filing & Notice Handling.' },
    { icon: 'bi-building', title: 'Company Services', description: 'Incorporation & Annual Compliance.' },
    { icon: 'bi-file-earmark-text', title: 'TDS & TCS', description: 'Registrations & Timely Filing.' },
    { icon: 'bi-people', title: 'Partnership & LLP', description: 'Legal Drafting & Registration.' },
    { icon: 'bi-award', title: 'Food License (FSSAI)', description: 'Basic, State & Central Licensing.' },
    { icon: 'bi-pen', title: 'Digital Signature (DSC)', description: 'Class 3 and DGFT signature services.' },
    { icon: 'bi-card-heading', title: 'PAN Center', description: 'Official NSDL TIN-PAN Center services.' },
];

const ServiceCard = ({ icon, title, description }) => (
    <div className="card h-100 text-center shadow-sm service-card border-0">
        <div className="card-body">
            <div className="icon-circle mx-auto mb-3">
                <i className={`bi ${icon} fs-2 text-primary-custom`}></i>
            </div>
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text text-secondary">{description}</p>
            <a href="#" className="stretched-link"></a>
        </div>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <p className="text-danger-custom fw-bold text-uppercase small-heading">What We Do</p>
                    <h2 className="section-title">Our Services</h2>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
