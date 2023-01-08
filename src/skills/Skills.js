import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  let front = [
    { className: "skill devicon-javascript-plain", skill: "Javascript" },
    { className: "skill devicon-react-original", skill: "ReactJS" },
    { className: "skill devicon-html5-plain", skill: "HTML5" },
    { className: "skill devicon-css3-plain", skill: "CSS3" },
    { className: "skill devicon-tailwindcss-plain", skill: "Tailwind" },
  ];

  let back = [
    {
      className: "skill devicon-ruby-plain-wordmark",
      skill: "Ruby & Ruby on Rails",
    },
    { className: "skill devicon-javascript-plain", skill: "JavaScript" },
    { className: "skill devicon-postgresql-plain", skill: "PostgreSQL" },
    { className: "skill devicon-rspec-original", skill: "Rspec" },
  ];

  let utility = [
    { className: "skill devicon-git-plain", skill: "Git & Github" },
    { className: "skill devicon-vscode-plain", skill: "VSCode" },
    { className: "skill devicon-webpack-plain", skill: "Webpack" },
    { className: "skill devicon-linux-plain", skill: "Linux" },
  ];

  const mapSkills = (hash) => {
    return hash.map((skill, index) => (
      <li class="skill-name" key={index}>
        <i className={skill.className}></i> {skill.skill}
      </li>
    ));
  };

  const renderSkills = (title, hash) => {
    return (
      <ul className="skills-list flex appear-now">
        <h3 className="skill">{title}</h3>
        {mapSkills(hash)}
      </ul>
    );
  };
  return (
    <motion.section
      className="skills flex"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="skills-header flex">My Skills</h2>
      <div className="skills-box flex">
        {renderSkills("Front End Development", front)}
        {renderSkills("Back End Development", back)}
        {renderSkills("Development Tools", utility)}
      </div>
    </motion.section>
  );
};

export default Skills;
