import dropInPreview from "../images/dropInPreview.png";
import raimentPreview from "../images/raimentPreview.png";
import "../styles/Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <ul className="projects-ul">
        <li className="projects-li">
          <div className="image-and-description">
            <div className="image-container">
              <img className="image" src={dropInPreview} />
            </div>
            <div className="description">
              <h3>
                <a
                  className="project-link"
                  href="https://github.com/sgafurov/Drop_In_Frontend"
                >
                  Drop-In
                </a>
              </h3>
              <p>
                Built a website to search for apartment buildings and give them
                a rating so that prospective renters can read the reviews before
                making a descision on an apartment building.
              </p>
              <ul className="technologies-used">
                <li><p>Javascript</p></li>
                <li><p>React</p></li>
                <li><p>Redux</p></li>
                <li><p>Google Maps API</p></li>
                <li><p>Netlify</p></li>
                <li><p>Node</p></li>
                <li><p>Express</p></li>
                <li><p>MongoDB</p></li>
                <li><p>Render</p></li>
              </ul>
            </div>
          </div>
        </li>

        <li className="projects">
          <div className="image-and-description">
            <div className="image-container">
              <img className="image" src={raimentPreview} />
            </div>
            <div className="description">
              <h3>
                <a
                  className="project-link"
                  href="https://github.com/sgafurov/Raiment"
                >
                  Raiment
                </a>
              </h3>
              <p>
                A website for posting clothing to sell online. Upload images,
                item information like brand and size, and a description. Users
                can act as both a buyer and seller and chat with other users on
                the site.
              </p>
              <ul className="technologies-used">
                <li><p>Javascript</p></li>
                <li><p>React</p></li>
                <li><p>Redux</p></li>
                <li><p>Firebase Storage</p></li>
                <li><p>Firebase Auth</p></li>
                <li><p>Firebase Firestone</p></li>
                <li><p>Firebase Realtime Database</p></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
