import "./project.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import HeaderCover from "./Header";
import FooterCover from "./Footer";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = ({ imageSrc, title, description, liveLink }) => {
  const [hovered, setHovered] = useState(false);

  const imageVariants = {
    hovered: {
      scale: 1.1,
      transition: {
        scale: { duration: 0.3 },
      },
    },
    normal: {
      scale: 1,
      transition: {
        scale: { duration: 0.3 },
      },
    },
  };

  return (
    <>
      <div className='content'>
        <motion.div
          className='imageContainer'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          variants={imageVariants}
          animate={hovered ? "hovered" : "normal"}
        >
          <motion.img
            src={imageSrc}
            alt=''
            variants={imageVariants}
            initial={{ scale: 0.5 }}
            animate={{
              scale: hovered ? 1.1 : 1,
              originX: hovered ? 0 : 1.5,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <b>{title}</b>
        <p>{description}</p>

        <a
          className='btn'
          href={liveLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          See Live Link
          <IoIosArrowForward className='icon' />
        </a>
        <br />
      </div>
    </>
  );
};

const textVariants = {
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Project = () => {
  const projectsData = [
    {
      title: <h1 className='project-title'> React-portfolio</h1>,
      imageSrc: "/images/react.png",
      description: (
        <p className='description-text'>
          Developed a frontend functional web-based portfolio, styled using SCSS
        </p>
      ),
      liveLink:
        "https://github.com/Yhujae/React_portfolio-SCSS/tree/master/portfolio",
    },
    {
      title: <h1 className='project-title'> React-portfolio</h1>,
      imageSrc: "/images/tailwind-css.png",
      description: (
        <p className='description-text'>
          <p className='description-text'>
            Created a functional web-based portfolio on the frontend, styled
            with Tailwind CSS.
          </p>
        </p>
      ),
      liveLink: "https://github.com/Yhujae/portfolio_tailwind",
    },
    {
      title: <h1 className='project-title'> Landing Page </h1>,
      imageSrc: "/images/bootstrap.png",
      description: (
        <p className='description-text'>
          Developed a frontend Landing page written in react and styled using
          bootstrap CSS
        </p>
      ),
      liveLink: "https://github.com/Yhujae/my_project",
    },

    {
      title: <h1 className='project-title'> Todo App </h1>,
      imageSrc: "/images/javascript.png",
      description: (
        <p className='description-text'>
          A simple Todo app written in react and javascript, and styled using
          CSS.
        </p>
      ),
      liveLink: "https://github.com/Yhujae/todo_app",
    },
  ];
  return (
    <div>
      <HeaderCover />
      <div className='projectIntro'>
        <h1>
          My <b>Projects</b> 💼
        </h1>
        <p>
          I've had the privilege of leading and collaborating on various startup
          initiatives, playing key roles in both team and personal projects. I'd
          like to share a selection that I believe will capture your interest.
          If you find something that intrigues you, don't hesitate to delve into
          the codebase. Many of these projects are open source on my GitHub, and
          your valuable contributions and ideas for further improvements are
          always welcome. Your collaboration is greatly appreciated!
        </p>
      </div>
      <motion.img
        className='scrollImage'
        variants={textVariants}
        animate='scrollButton'
        src='/images/arrow.png'
        alt=''
      />
      <div className='projectContainer'>
        {projectsData.map((project, index) => (
          <div className={`project${index + 1}`} key={index}>
            <ProjectCard
              className='projectCard'
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              liveLink={project.liveLink}
            />
          </div>
        ))}
      </div>

      <FooterCover />
    </div>
  );
};

export default Project;
