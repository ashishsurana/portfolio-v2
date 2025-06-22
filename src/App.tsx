import "./App.css";
import "./Components/index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import profileImage from "./assets/IMG.jpeg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef, useState } from "react";
import Journey, { startDate, getMonths } from "./Components/Journey";
import stackOverflowLogo from "./assets/stack.png";

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

  const noOfYears =
    Math.floor(
      getMonths(startDate, new Date().toISOString().split("T")[0]) / 12
    ) + "+";

  return (
    <div>
      <div className="about-me flex center">
        <div>
          <img
            src={profileImage}
            className="logo profile-image"
            alt="Ashish Surana - Profile Picture"
          />
        </div>
        <div className="col flex content">
          <h4 className="hello">Hey there, I'm</h4>
          <h1>
            <span className="orange">Ashish</span> Surana 👋
          </h1>
          <p>
            A Frontend Engineer with {noOfYears} years of experience building
            fast, scalable, and accessible web apps across <b>B2C</b> and{" "}
            <b>B2B</b> products in{" "}
            <b>health care, travel, and customer experience</b> domains.
            <br />I write clean, testable, modular code — leveraging reusable
            components, efficient state management, and scalable architecture.
            From consumer apps to enterprise platforms, I follow best practices
            like <b>design systems and performance tuning</b> while leveraging{" "}
            <b>AI tools</b> to accelerate development, improve code reviews, and
            catch edge cases early — freeing up time to refine architecture.
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
          className="scroll-down-cta orange"
        >
          <KeyboardArrowDownIcon />
        </div>
      )}

      <div className="experience flex col">
        <h2 className="title flex">
          <span className="orange">My</span>&nbsp;Journey 🚀
        </h2>
        <Journey />
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
            <img src={stackOverflowLogo} />
          </a>
          <a href="https://dev.to/ashishsurana">
            <img
              alt="Ashish Surana's DEV Profile"
              height="21"
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              style={{
                objectFit: "cover",
                borderRadius: "4px",
                marginTop: "2px",
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
