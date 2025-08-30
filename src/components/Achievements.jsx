import React from 'react';

const achievementsData = [
  { year: '2018 - Present', title: 'Firm Established', description: 'KIRAN & ASSOCIATES was founded with a mission to simplify taxation for local businesses in Guntur.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo1' },
  { year: '2020 - Present', title: '100+ Clients Milestone', description: 'Successfully served over 100 satisfied clients, establishing a strong reputation for reliability and expertise.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo2' },
  { year: '2022 - Present', title: 'Expanded Service Portfolio', description: 'Added Company Incorporation and FSSAI licensing to our core services to meet growing client demand.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo3' },
  { year: '2024 - Present', title: 'Recognized as Top Consultant', description: 'Awarded "Top Tax Consultancy Firm in Guntur" by the local Chamber of Commerce.', logo: 'https://placehold.co/100x50/cccccc/000000?text=Logo4' },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
            <p className="text-danger-custom fw-bold text-uppercase small-heading">My Success Path Journey</p>
            <h2 className="section-title">Milestones & Achievements</h2>
        </div>
        <div className="achievement-timeline">
          {achievementsData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                  <p className="text-muted mb-1">{item.year}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold text-danger-custom mb-0">{item.title}</h5>
                    <img src={item.logo} alt={`${item.title} logo`} className="achievement-logo" />
                  </div>
                  <p className="mt-2 text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
