import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Science – Data Science</h4>
                <h5>University of Greenwich, London</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              CGPA 6.0. Specialization in data science, machine learning,
              deep learning frameworks, and data engineering with hands-on
              projects in computer vision and NLP.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services, India</h5>
              </div>
              <h3>1.5 Yr</h3>
            </div>
            <p>
              Worked on the Marks &amp; Spencer UK project. Built workflow
              designs using OMS Sterling integrated with Java to automate
              order processing. Developed Java code using DOM for XML
              processing and utilized XSL for XML transformation with the
              Sterling Order Management System.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science &amp; Engineering</h4>
                <h5>Vel Tech University, Chennai</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              CGPA 7.77. Strong foundation in object-oriented programming,
              data structures, algorithms, database management, and software
              engineering principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
