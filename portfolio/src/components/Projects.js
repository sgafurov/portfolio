import dropInPreview from "../images/dropInPreview.png";
import raimentPreview from "../images/raimentPreview.png";
import "../styles/Projects.css";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li className="projects">
          <div className="image-and-description">
            <img className="image" src={dropInPreview} />
            <div className="description">
              <h3>
                <a href="https://github.com/sgafurov/Drop_In_Frontend">
                  Drop-In
                </a>
              </h3>
              <p>
                Built a website to search for apartment buildings and give them
                a rating so that prospective renters can read the reviews before
                making a descision on an apartment building.
              </p>
              <ul className="technologies-used">
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Google Maps API</li>
                <li>Netlify</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Render</li>
              </ul>
            </div>
          </div>
        </li>

        <li className="projects">
          <div className="image-and-description">
            <img className="image" src={raimentPreview} />
            <div className="description">
              <h3>
                <a href="https://github.com/sgafurov/Raiment">Raiment</a>
              </h3>
              <p>
                A website for posting clothing to sell online. Upload images,
                item information like brand and size, and a description. Users
                can act as both a buyer and seller and chat with other users on
                the site.
              </p>
              <ul className="technologies-used">
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Firebase Storage</li>
                <li>Firebase Auth</li>
                <li>Firebase Firestone</li>
                <li>Firebase Realtime Database</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
