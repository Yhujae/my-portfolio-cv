import "./footer.scss";

import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr style={{ marginTop: "10%", width: "40vw" }} />
      <div className='footer'>
        <p>&copy; 2023 Yhujae Dev</p>
        <div className='social'>
          <a href='/contact' target='_blank' rel='noopener noreferrer'>
            <FaPhone />
          </a>
          <a
            href='https://github.com/yhujae'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/precious-roberts-404a37254'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
