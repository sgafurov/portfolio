import "../styles/Resume.css";

export const Resume = () => {
  return (
    <div className="resume">
      <h1>Experiences</h1>
      <ol>
        <li className="experiences">
          <div className="dates-and-descriptions">
            <div className="job-dates">
              <p>June 2022 - May 2023</p>
            </div>
            <div className="job-descriptions">
              <span>
                <strong>Software Engineer Intern • PowerSchool</strong>
              </span>
              <p>New York, NY</p>
              <ul>
                <li>Developed an internal tool for managing student data.</li>
                <li>
                  Extracted and migrated data from XML documents containing
                  25-200 database tables for each of the 50 states.
                </li>
                <li>Decreased time needed to manage database tables by 50%.</li>
                <li>
                  Utilized Java library’s DOM parser to parse and extract data
                  from documents, and the JSOUP library to parse HTML text.
                </li>
                <li>
                  Created ~6 custom Java objects and ~15 regex patterns to match
                  specific XML elements and attributes.
                </li>
                <li>
                  Performed thorough testing utilizing virtual machines to
                  ensure 100% accuracy and integrity of data.
                </li>
                <li>
                  Improved user experience for 70+ developers by implementing a
                  GUI dialog and converting the program into a jar file.
                </li>
                <li>
                  Delivered project demo to 5 members of the engineering
                  leadership, accompanied by detailed technical documentation.
                </li>
              </ul>
              <ul className="technologies-used">
                <li>Java</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>XML</li>
                <li>JSOUP</li>
              </ul>
            </div>
          </div>
        </li>

        <li className="experiences">
          <div className="dates-and-descriptions">
            <div className="job-dates">
              <p>Jan 2022 - Aug 2022</p>
            </div>
            <div className="job-descriptions">
              <span>
                <strong>
                  Fullstack Developer Fellow • Tech Talent Pipeline
                </strong>
              </span>
              <p>Brooklyn, NY</p>
              <ul>
                <li>
                  Acquired hands-on training in full-stack web development by
                  learning a comprehensive range of in-demand technologies.
                </li>
                <li>
                  Completed 2-3 project-based assignments per week with projects
                  ranging between designing wireframes with Figma, managing
                  databases using Postgres, or creating full stack websites with
                  Javascript, React, Node, and Express.
                </li>
                <li>
                  Managed a team of 3 people in a capstone project to develop
                  and deliver a full stack web application in 4 days.
                </li>
              </ul>
              <ul className="technologies-used">
                <li>Javascript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node</li>
                <li>Express</li>
                <li>Postgres</li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};
