import "./App.css";
import "./Components/index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import levelAiLogo from "./assets/lai.svg";
import trivagoLogo from "./assets/trv.svg";
import innovaccerLogo from "./assets/inno.png";
import profileImage from "./assets/IMG.jpeg";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef, useState } from "react";

const startDate = "01/06/2017";

const getMonths = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months = (end.getFullYear() - start.getFullYear()) * 12;
  return months;
};

const today = new Date().toISOString().split("T")[0];

const totalMonths = getMonths(startDate, today);
const journey = [
  {
    company: "Level AI",
    startDate: "01/09/2022",
    location: "Noida",
  },
  {
    company: "Trivago",
    startDate: "01/11/2020",
    endDate: "01/09/2022",
    location: "Düsseldorf, Germany",
  },
  {
    company: "Innovaccer",
    startDate: "01/01/2018",
    endDate: "01/11/2020",
    location: "Noida",
  },
  {
    company: "Aadhaar API",
    startDate: "01/08/2017",
    endDate: "01/01/2018",
    location: "Pune",
  },
].reduce(
  (acc, curr) => {
    const months = getMonths(curr.startDate, today);
    acc.weight += months;
    acc.arr.push({ ...curr, top: (months / totalMonths) * 100 });
    return acc;
  },
  {
    weight: 0,
    arr: [] as {
      company: string;
      startDate: string;
      location: string;
      top: number;
    }[],
  }
);

function App() {
  const [isScrollAvailable, setIsScrollAvailable] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollAvailable = scrollHeight - viewportHeight > 100;
        setIsScrollAvailable(scrollAvailable && !entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [footerRef.current]);

  return (
    <div>
      <div className="about-me flex center">
        <div>
          <img
            src={profileImage}
            className="logo profile-image"
            alt="Vite logo"
          />
        </div>
        <div className="col flex content">
          <h4 className="subtle hello">Hey there, I'm</h4>
          <h1>
            <span className="orange">Ashish</span> Surana 👋
          </h1>
          <p className="subtle">
            A software engineer with a passion for building scalable and
            efficient systems. I am currently working at Level AI, where I am
            building the frontend for the platform. A software engineer with a
            passion for building scalable and efficient systems. I am currently
            working at Level AI, where I am building the frontend for the
            platform.
          </p>
          <div>
            <Button
              variant="outlined"
              className="resume-button"
              color="secondary"
              sx={{
                color: "#e96269",
                "&:focus": {
                  outlineColor: "unset",
                },
              }}
              endIcon={
                <OpenInNewIcon
                  style={{
                    fontSize: "16px",
                  }}
                />
              }
              onClick={() => {
                window.open("https://ashishsurana.in/Resume.pdf", "_blank");
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>

      {isScrollAvailable && (
        <div
          onClick={() => {
            window.scrollTo({
              top:
                window.innerHeight *
                Math.floor(window.scrollY / window.innerHeight + 1),
              behavior: "smooth",
            });
          }}
          className="scroll-down orange"
        >
          <KeyboardArrowDownIcon />
        </div>
      )}

      <div className="experience flex col">
        <h2 className="title flex">
          <span className="orange">My</span>&nbsp;Journey
        </h2>
        <div className="flex experience-container">
          <div className="company-meta-container">
            <div className="company-meta level-ai">
              <a href="https://thelevelai.ai" target="_blank">
                <img className="logo" src={levelAiLogo} alt="Vite logo" />
              </a>
              <h5 className="subtle">Noida</h5>
            </div>
            <div
              className="company-meta trivago"
              style={{ top: journey.arr[0].top - 7 + "%" }}
            >
              <a href="https://trivago.com" target="_blank">
                <img className="logo" src={trivagoLogo} alt="Vite logo" />
              </a>
              <h5 className="subtle">Düsseldorf, Germany</h5>
            </div>
            <div
              className="company-meta innovaccer"
              style={{ top: journey.arr[1].top - 13 + "%" }}
            >
              <a href="https://innovaccer.com" target="_blank">
                <img className="logo" src={innovaccerLogo} alt="Vite logo" />
              </a>
              <h5 className="subtle">Noida</h5>
            </div>
            <div
              className="company-meta innovaccer"
              style={{ top: journey.arr[2].top - 20 + "%" }}
            >
              <a href="https://innovaccer.com" target="_blank">
                <img className="logo" src={innovaccerLogo} alt="Vite logo" />
              </a>
              <h5 className="subtle">Pune</h5>
            </div>
            <div className="company-meta" style={{ top: 72 + "%" }}>
              <SchoolIcon />
              <h5 className="subtle">2017</h5>
            </div>
          </div>

          <div className="timeline">
            <div className="dot" style={{ top: `${0}%` }}></div>
            {journey.arr.map((item) => (
              <div
                className="dot"
                key={item.company}
                style={{ top: `${item.top}%` }}
              ></div>
            ))}
          </div>
          <div className="flex col work-details">
            <div className="card">
              <h4>Senior Software Engineer - Frontend</h4>
              <h5 className="subtle">
                Level AI is a startup that is building a platform for AI-powered
                customer service. I was part of the team that built the frontend
                for the platform.
                <br />
                I was part of the team that built the frontend for the platform.
                <br />I was part of the team that built the frontend for the
                platform.
                <br />I was part of the team that built the frontend for the
                platform.
                <br />I was part of the team that built the frontend for the
                platform.
              </h5>
            </div>
            <div className="card">
              <div className="designation">
                <h4>Javascript Engineer</h4>
                <h5 className="subtle">2020 - 2021</h5>
              </div>
              <h5 className="subtle">
                Level AI is a startup that is building a platform for AI-powered
                customer service. I was part of the team that built the frontend
                for the platform.
              </h5>
            </div>
            <div className="card">
              <h4>Software Engineer - Frontend</h4>
              <h5 className="subtle">
                Level AI is a startup that is building a platform for AI-powered
                customer service. I was part of the team that built the frontend
                for the platform.
              </h5>
            </div>
            <div className="card">
              <h4>Full Stack Engineer</h4>
              <h5 className="subtle">
                Level AI is a startup that is building a platform for AI-powered
                customer service. I was part of the team that built the frontend
                for the platform.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="contact flex col center">
        <h2 className="flex">
          <span className="orange">Let's</span>&nbsp;Connect! 💌
        </h2>
        <p className="description">
          If you ever want to grab a coffee/tea{" "}
          <span className="subtle">(virtually)</span> or just want a quick chat,
          you can find me on social media or you can send me an email here -{" "}
          <a className="orange" href="mailto:ashishsurana.in@gmail.com">
            ashishsurana.in@gmail.com
          </a>
          <br />
          <span className="orange">Phone:</span>{" "}
          <a href="tel:+919784878727" className="phone-link">
            (+91) 9784&nbsp;8787&nbsp;27
          </a>
        </p>
        <div className="social-links flex">
          <a target="_blank" href="https://github.com/ashishsurana/">
            <GitHubIcon />
          </a>
          <a target="_blank" href="https://in.linkedin.com/in/ashishsurana1">
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://twitter.com/ashishsurana1">
            <TwitterIcon />
          </a>
          <a
            target="_blank"
            href="https://stackoverflow.com/users/3950481/ashish-surana"
          >
            {/* <StackOverflowIcon /> */}
            stack
          </a>
          <a href="https://dev.to/ashishsurana">
            <img
              alt="Ashish Surana's DEV Profile"
              height="21"
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              style={{
                objectFit: "cover",
                borderRadius: "3px",
              }}
              width="30"
            />
          </a>
        </div>
      </div>
      <div className="footer" ref={footerRef}></div>
    </div>
  );
}

export default App;
