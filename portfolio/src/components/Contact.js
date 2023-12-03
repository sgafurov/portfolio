import { useState } from "react";
import githubLogo from "../images/logos/githubLogo.png";
import linkedInLogoWhite from "../images/logos/linkedInLogoWhite.png";
import emailIcon from "../images/logos/emailIcon.png";
import "../styles/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({ name: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent. Thank you!");
    resetForm();
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Send me a message</h1>
        <label>
          <input
            className="name"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
        <label>
          <textarea
            className="message"
            type="text"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Send message" className="submit-button" />
      </form>

      <div className="personal-links">
        <ul>
          <li>
            <a href="https://github.com/sgafurov">
              <img src={githubLogo} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sgafurov/">
              <img src={linkedInLogoWhite} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="mailto:shakhramgafurov@gmail.com">
              <img src={emailIcon} alt="Email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
