import { experiencesData } from "../lib/data";
import "./experience.scss";
import FooterCover from "./FooterCover";
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
      </div>
      <hr style={{ marginTop: "10%", width: "40vw" }} />
      <FooterCover />
    </>
  );
}

export default Experience;
