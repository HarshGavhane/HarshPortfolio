import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer / Data Systems Intern</h4>
                <h5>Motilal Oswal Financial Services</h5>
              </div>
              <h3>2020-2021</h3>
            </div>
            <p>
              Developed backend utilities and automation scripts supporting internal business systems and reporting workflows.
              Assisted in debugging production issues and implemented fixes to improve application reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Tata Communications Ltd</h5>
              </div>
              <h3>2021-2022</h3>
            </div>
            <p>
              Developed backend services using Python and .NET to support distributed enterprise applications.
              Contributed to CI/CD pipeline improvements, enabling reliable, consistent, and automated software deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Tata Communications Ltd</h5>
              </div>
              <h3>2022-2024</h3>
            </div>
            <p>
              Led development and operational support of cloud-native microservices powering enterprise-scale production platforms.
              Improved service reliability and strengthened observability through structured logging and monitoring dashboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
