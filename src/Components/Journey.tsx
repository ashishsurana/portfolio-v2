import levelAiLogo from "../assets/lai.svg";
import trivagoLogo from "../assets/trv.svg";
import innovaccerLogo from "../assets/inno.png";
import SchoolIcon from "@mui/icons-material/School";

export const startDate = "01/06/2017";

export const getMonths = (startDate: string, endDate: string) => {
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

const Journey = () => {
  return (
    <div
      className="flex experience-container scroll-shadows"
      onScroll={(event) => {
        const parentElement = event.currentTarget.parentElement;
        if (parentElement) {
          parentElement.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <div
        className="flex"
        style={{
          height: "fit-content",
        }}
      >
        <div className="company-meta-container">
          <div className="company-meta level-ai">
            <a href="https://thelevelai.ai" target="_blank">
              <img className="logo" src={levelAiLogo} alt="" />
            </a>
            <h5 className="subtle">Noida</h5>
          </div>
          <div
            className="company-meta trivago"
            style={{ top: journey.arr[0].top - 9 + "%" }}
          >
            <a href="https://trivago.com" target="_blank">
              <img className="logo" src={trivagoLogo} alt="" />
            </a>
            <h5 className="subtle">Düsseldorf, Germany</h5>
          </div>
          <div
            className="company-meta innovaccer"
            style={{ top: journey.arr[1].top - 14 + "%" }}
          >
            <a href="https://innovaccer.com" target="_blank">
              <img className="logo" src={innovaccerLogo} alt="" />
            </a>
            <h5 className="subtle">Noida</h5>
          </div>
          <div
            className="company-meta"
            style={{ top: journey.arr[2].top - 23 + "%" }}
          >
            <h3>
              <b>AadhaarAPI.com</b>
            </h3>
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
            <div className="company-meta level-ai flex center">
              <a href="https://thelevelai.ai" target="_blank">
                <img className="logo" src={levelAiLogo} alt="" />
              </a>
              <h5 className="subtle">Noida</h5>
            </div>
            <h4>Senior Software Engineer - Frontend</h4>
            <ul>
              <li>
                About Level AI: Level AI is a startup that is building a
                platform for AI-powered customer service. I was part of the core
                team that maintains the core product. My responsibilities were
                as follows:
              </li>
              <li>
                Successfully delivered new theme for the product in a phased
                manner single handedly.
              </li>
              <li>
                Ownership of Analytics Module to let user analyse different
                metrics of the product.
              </li>
              <li>
                Responsible for the initial setup of the frontend,{" "}
                <b>Design System, Test suite</b> and some low level utilities.
              </li>
              <li>
                Actively involved in recruitment, knowledge sharing, improving
                processes and onboarding new joiners.
              </li>
              <li>
                Contributed in improving <b>Engineering processes</b> and{" "}
                <b>Automation</b> using <b>AI Tools and Gitlab CI</b>.
              </li>
              <li>
                Technologies - <b>React</b>, <b>Next.js</b>, firebase, chart.js,
                Jest
              </li>
            </ul>
          </div>
          <div className="card" style={{ top: "6.5%" }}>
            <div className="company-meta trivago flex center">
              <a href="https://trivago.com" target="_blank">
                <img className="logo" src={trivagoLogo} alt="" />
              </a>
              <h5 className="subtle">Düsseldorf, Germany</h5>
            </div>
            <div className="designation">
              <h4>Software Engineer - Javascript</h4>
            </div>
            <ul>
              <li>
                About trivago: trivago is a global hotel search platform. The
                Product consist of a meta search and a booking engine. And my
                roles were as follows:
              </li>
              <li>
                Ownership of Front end part of express-booking, Responsibilities
                including preparing{" "}
                <b>design document, tackling tech-debt, improving processes</b>
              </li>
              <li>
                Successfully migrated the booking engine from php to react after
                A/B testing.
              </li>
              <li>
                Actively involved in cross team communication with Designers,
                Product owners, other Engineers to take the product forward with
                matching business KPIs.
              </li>
              <li>
                Technologies -<b>React, Node.js</b>, symphony,{" "}
                <b>Server Side Rendering</b>, A/B testing, Performance
              </li>
            </ul>
          </div>
          <div className="card" style={{ top: 8 + "%" }}>
            <div className="company-meta innovaccer flex center">
              <a href="https://innovaccer.com" target="_blank">
                <img className="logo" src={innovaccerLogo} alt="" />
              </a>
              <h5 className="subtle">Noida</h5>
            </div>
            <h4>Software Development Engineer - I</h4>
            <ul>
              <li>
                About Innovaccer: Innovaccer is a healthcare data activation
                platform for care management. The Product consist of a Micro
                Front-end application and my roles were as follows:
              </li>
              <li>
                Successfully delivered a product from scratch while mentoring
                junior engineers.
              </li>
              <li>
                Contributed to the development of micro front-end framework.
              </li>
              <li>
                Ownership of development and releasing two modules (impacting
                whole product), in React using Redux and styled components.
              </li>
              <li>
                Technologies - <b>React</b>, AngularJs{" "}
                <b>, Express, Server Side Rendering, Micro Frontend</b>
              </li>
            </ul>
          </div>
          <div className="card" style={{ top: 8 + "%" }}>
            <div className="company-meta flex center">
              <h3>
                <b>AadhaarAPI.com</b>
              </h3>
              <h5 className="subtle">Pune</h5>
            </div>
            <h4>Full Stack Engineer</h4>
            <ul className="">
              <li>
                About AdhaarAPI: Aadhaar is the database containing biometrics{" "}
                <b>1.4 Billion Indians</b> and AadhaarAPI is a product to
                leverage the power. I worked on the "<b>Know Your Customer</b>
                (EKYC)" SDK.
              </li>
              <li>
                Delivered Dashboard from scratch and developed efficient{" "}
                <b>REST API</b>s for improving workflows.
              </li>
              <li>
                Technologies - <b>React</b>, Redux, <b>Server Side Rendering</b>
                , Node.js, Postgres, AWS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
