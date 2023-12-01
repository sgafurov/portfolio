import "../styles/Resume.css";

export const Resume = () => {
  return (
    <div className="resume">
      <ol>
        <li>
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
              <p>Desc</p>
              <p>Tech stack i circular blocks</p>
              <p>Make each block clickable (send them to company site)</p>
            </div>
          </div>
        </li>

        <li>
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
