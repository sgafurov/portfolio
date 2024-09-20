import { useState } from "react";
import githubLogo from "../images/logos/githubLogo.png";
import linkedInLogoWhite from "../images/logos/linkedInLogoWhite.png";
import emailIcon from "../images/logos/emailIcon.png";
import "../styles/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("https://portfolio-backend-mphg.onrender.com/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let result = await response.json();
    console.log("result", result);
    alert(result.status);
    if (result.status === "Message sent!") {
      resetForm();
    }
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
          <input
            className="email"
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
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
        <input type="submit" value="Send" className="submit-button" />
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
