import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Django",
    color: "blue",
    level: "advanced",
  },
  {
    skill: "React",
    color: "yellow",
    level: "beginner",
  },
  {
    skill: "Docker",
    color: "red",
    level: "advanced",
  },
  {
    skill: "PostgreSQL",
    color: "purple",
    level: "intermediate",
  },
];

function Avatar() {
  return <img src="cheddar.jpg" className="avatar" alt="Erkhes N" />;
}

function Intro() {
  return (
    <div>
      <h1>Erkhes N</h1>
      <p>Backend Engineer</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  const emojis = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>{emojis[skill.level]}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
