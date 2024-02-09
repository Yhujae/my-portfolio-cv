import "./footerCover.scss";

import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";

const FooterCover = () => {
  return (
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
  );
};

export default FooterCover;
