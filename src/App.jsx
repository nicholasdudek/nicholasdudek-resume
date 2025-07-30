
import './App.css';
import { useState } from 'react';

const clickSound = typeof window !== 'undefined' ? new Audio('click-sound.mp3') : null;
function playClick() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

function CollapsibleExperience({ title, subtitle, date, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="item">
      <h3 style={{ cursor: 'pointer' }} onClick={() => { playClick(); setOpen((v) => !v); }}>
        {title} <span>{subtitle}</span> <span style={{ fontWeight: 400, fontSize: '0.9em', marginLeft: 8 }}>{date}</span>
        <span style={{ marginLeft: 8, color: '#ff0055' }}>{open ? '▲' : '▼'}</span>
      </h3>
      {open && children}
    </div>
  );
}

function CollapsibleSkills({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="skills-group">
      <h4 style={{ cursor: 'pointer' }} onClick={() => { playClick(); setOpen((v) => !v); }}>
        {title} <span style={{ marginLeft: 8, color: '#ff0055' }}>{open ? '▲' : '▼'}</span>
      </h4>
      {open && children}
    </div>
  );
}

function CollapsibleCertificate({ title, date, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="item">
      <h3 style={{ cursor: 'pointer' }} onClick={() => { playClick(); setOpen((v) => !v); }}>
        {title} <span className="date">{date}</span>
        <span style={{ marginLeft: 8, color: '#ff0055' }}>{open ? '▲' : '▼'}</span>
      </h3>
      {open && children}
    </div>
  );
}

function App() {
  return (
    <div className="resume punk-theme">
      <header>
        <h1 className="animated-hover name-title">Nicholas M. Dudek</h1>
        <p className="subtitle animated-hover">Finance Analyst & Full Stack Developer</p>
        <div className="contact animated-hover">
          <span>Nicholas.M.Dudek@gmail.com</span> | <span>+082 010-2052-0225</span>
          <span style={{ float: 'right' }}>USA</span>
        </div>
      </header>
      <section className="section">
        <h2 className="animated-hover">Education</h2>
        <div className="item">
          <h3 className="animated-hover">Bachelor of Science - Finance</h3>
          <span>Missouri State University</span>
        </div>
      </section>
      <section className="section">
        <h2>Experience</h2>
        <CollapsibleExperience
          title="Finance Analyst"
          subtitle="@ Ceva Logistics Korea, Inc."
          date="(2 yrs)"
        >
          <ul>
            <li>Compiled and coordinated financial data for analysis and reconciliation.</li>
            <li>Researched and analyzed revenue and expenditure trends for accuracy and integrity.</li>
            <li>Developed complex spreadsheets, charts, and tables of financial and budget information using HFM.</li>
            <li>Provided tailored financial analysis and offered advice to improve business processes and manage costs.</li>
            <li>Researched and calculated impact of operational changes to budget, financial data, and financial systems.</li>
            <li>Compiled data, reports, and year-end audit information.</li>
            <li>Worked with clients to support understanding of rationale and details of financial strategies.</li>
            <li>Developed forecasting tools to analyze revenue variance, business pipeline, and industry trends.</li>
          </ul>
        </CollapsibleExperience>
        <CollapsibleExperience
          title="Motor Transport Operator"
          subtitle="@ United States Army"
          date="(4 yrs)"
        >
          <ul>
            <li>Basic Combat Training Fort Sill, Oklahoma </li>
            <li>Advanced Instruction Training El Paso, Texas.</li>
            <li>Awarded AIT Honor Graduate, Army Achievement Medal, National Defense Service Medal, Global War on Terrorism, Korean Defense Service Medal, Overseas Service Ribbon (3rd Award), Driver Badge.</li>
          </ul>
        </CollapsibleExperience>
      </section>


      <section className="section">
        <h2>Certifications & Training</h2>
        <CollapsibleCertificate title="Software Engineering Certificate" date="(Mar 2025 – Aug 2025)">
          <ul>
            <li>React Development Bootcamp</li>
            <li>JavaScript Development with Node, Express, & MongoDB</li>
            <li>JavaScript Programming Bootcamp</li>
            <li>Front-End Tools & Portfolio</li>
            <li>JavaScript for Front-End</li>
            <li>Flexbox, Grid, & Bootstrap</li>
            <li>Advanced HTML & CSS</li>
            <li>Web Development with HTML & CSS</li>
            <li>Python Web Development with Django</li>
            <li>Python Programming Immersive</li>
          </ul>
        </CollapsibleCertificate>
        <CollapsibleCertificate title="Data Analytics Certificate" date="(Aug 2025 – Sep 2025)">
          <ul>
            <li>Excel for Data Analytics</li>
            <li>Data Analytics Foundations</li>
            <li>Tableau Bootcamp</li>
            <li>SQL Bootcamp</li>
            <li>Python for Data Science Bootcamp</li>
            <li>Python Machine Learning Bootcamp</li>
            <li>Python for Automation</li>
            <li>Python Data Visualization & Dashboards</li>
          </ul>
        </CollapsibleCertificate>
      </section>
      <section className="section">
        <h2>Ramp Factory</h2>
        <div className="item">
          <h3>Founder</h3>
          <p>Skateboard School <a href="https://www.instagram.com/rampfactory/?hl=en" target="_blank" rel="noopener noreferrer">View on Instagram</a></p>
        </div>
      </section>
      <div className="contact" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="https://github.com/nicholasdudek/" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.nobledesktop.com/credentials/8df896e3-0224-4988-b18a-6d5305b46f27" target="_blank" rel="noopener noreferrer"> Noble Desktop</a>
      </div>
    </div>
  );
}

export default App;
