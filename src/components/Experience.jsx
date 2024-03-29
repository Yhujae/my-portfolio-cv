import { experiencesData } from "../lib/data";
import "./experience.scss";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import Footer from "./Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <>
      <div className='heading'>
        <h1>Work Experience</h1>
        <p>
          I've collaborated with a few companies, honing my skills and working
          alongside talented individuals while gaining valuable insights. Here's
          a glimpse into my professional journey:
        </p>
      </div>
      <div className='experience'>
        <VerticalTimeline>
          {experiencesData.map((job, index) => (
            <VerticalTimelineElement
              key={index}
              className='vertical-timeline-element--work'
              contentStyle={{
                background: "#fff",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderBottom: "4px solid #e5a519",
                borderRadius: "10px",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={job.date}
              iconStyle={{
                background: "#fff",
                color: "#fff",
              }}
              icon={
                <img
                  src={job.imageSrc}
                  alt={job.company}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              }
            >
              <h3
                className='vertical-timeline-element-title'
                style={{ color: "#000" }}
              >
                {job.title}
              </h3>
              <p style={{ color: "#5da1b1" }}>{job.company}</p>
              <ul style={{ lineHeight: "2", color: "#777" }}>
                {job.descriptions.map((description, subIndex) => (
                  <li key={subIndex} style={{ fontSize: "18px" }}>
                    {description}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <div className='info'>
          <a
            className='cv__link'
            href='/contact'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Me
            <HiArrowRight className='cv__download' />
          </a>
          <a
            className='cv__link'
            href='https://www.dropbox.com/scl/fi/h9surv5d3wpth2kklwcqs/My-CV.pdf?rlkey=piz0zpuemaaz7n6g2y33rvn0f&dl=0'
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            Download CV
            <HiDownload className='cv__download' />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Experience;
