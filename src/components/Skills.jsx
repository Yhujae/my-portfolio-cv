import "./skills.scss";
import { motion } from "framer-motion";
import { useState } from "react";

function Skills() {
  const imageInfo = [
    { src: "/images/redux-1.png", name: "Redux" },
    { src: "/images/javascript.png", name: "JavaScript" },
    { src: "/images/git.png", name: "Git" },
    { src: "/images/github.png", name: "Github" },
    { src: "/images/css.png", name: "CSS" },
    { src: "/images/html-5.png", name: "HTML5" },
    { src: "/images/react.png", name: "React" },
    { src: "/images/node-js.png", name: "Node.js" },
    { src: "/images/tailwind-css.png", name: "Tailwind" },
    { src: "/images/sass.png", name: "SASS" },
    { src: "/images/bootstrap.png", name: "Bootstrap" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index, hoverState) => {
    if (hoverState) {
      setHoveredIndex(index);
    } else {
      setHoveredIndex(null);
    }
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

  const containerVariants = {
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

  const nameTagVariants = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    hidden: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div className='skillsContainer'>
      <div className='intro'>
        <h1>
          Hello, i'm <b>Precious</b> 🙂
        </h1>
        <p>
          Adaptable IT Professional and Front-End Developer with a passion for
          creating seamless and visually appealing user experiences. Proficient
          in a few front-end frameworks and experienced in translating complex
          business requirements into elegant, responsive, and high-performance
          interfaces. I am eager to embrace new challenges and open to
          continuous learning opportunities in the ever-evolving field of
          front-end development and Information Technology. Let's build
          something amazing together!
        </p>
      </div>
      <motion.img
        className='scroll'
        variants={textVariants}
        animate='scrollButton'
        src='/images/arrow.png'
        alt=''
      />

      <h2>My Skills</h2>
      <div className='iconContainer'>
        {imageInfo.map((info, index) => (
          <motion.div
            key={index}
            className='icon'
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            variants={containerVariants}
            animate={hoveredIndex === index ? "hovered" : "normal"}
          >
            <motion.img
              src={info.src}
              alt=''
              initial={{ scale: 0.5 }}
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                originX: hoveredIndex === index ? 0 : 1.5,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className='nameTagContainer'
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className='nameTag'
              initial={{ scale: 0 }}
              animate={hoveredIndex === index ? "visible" : "hidden"}
              variants={nameTagVariants}
            >
              {info.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
