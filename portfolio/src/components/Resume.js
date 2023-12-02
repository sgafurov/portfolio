import "../styles/Resume.css";

export const Resume = () => {
  return (
    <div className="resume">
      <ol>
        <li className="job-experience">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              margin: "0 auto",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ margin: "0px" }}>June 2022 - May 2023</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <span>Software Engineer Intern • PowerSchool</span>
              <p>New York, NY</p>
              <ul>
                <li>Developed an internal tool for managing student data.</li>
                <li>
                  Extract and migrated data from XML documents containing 25-200
                  database tables for each of the 50 states.
                </li>
                <li>
                  Decreased the time needed to manage those database tables by
                  50%.
                </li>
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
                  Improved the user experience for 70+ developers by
                  implementing a GUI dialog and converting the program into a
                  jar file.
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

        <li className="job-experience">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              margin: "0 auto",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ margin: "0px" }}>Jan 2022 - Aug 2022</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <span>Fullstack Developer Fellow • Tech Talent Pipeline</span>
              <p>Brooklyn, NY</p>
              <p>Desc</p>
              <p>Tech stack i circular blocks</p>
              <p>Make each block clickable (send them to company site)</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};
