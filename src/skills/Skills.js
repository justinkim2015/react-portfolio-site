import './skills.css'

const Skills = () => {
  return (
    <section class="skills flex" id="skills">
      <h2 class="skills-header flex">My Skills</h2>
      <div class="skills-box flex">
        <ul class="skills-list flex">
          <h3 class="skill">Front End Development</h3>
          <li><i class="skill devicon-javascript-plain"></i> JavaScript</li>
          <li><i class="skill devicon-react-original"></i> ReactJS</li>
          <li><i class="skill devicon-html5-plain"></i> HTML5</li>
          <li><i class="skill devicon-css3-plain"></i> CSS3</li>
          <li><i class="skill devicon-tailwindcss-plain"></i> Tailwind</li>
        </ul>
        <ul class="skills-list flex">
          <h3 class="skill">Back End Development</h3>
          <li><i class="skill devicon-ruby-plain-wordmark"></i> Ruby & Ruby on Rails</li>
          <li><i class="skill devicon-javascript-plain"></i> Javascript</li>
          <li><i class="skill devicon-postgresql-plain"></i> PostgreSQL</li>
          <li><i class="skill devicon-rspec-original"></i> Rspec</li>
        </ul>
        <ul class="skills-list flex">
          <h3 class="skill">Development Tools</h3>
          <li><i class="skill devicon-git-plain"></i> Git & Github</li>
          <li> <i class="skill devicon-vscode-plain"></i> VSCode</li>
          <li><i class="skill devicon-webpack-plain"></i> Webpack</li>
          <li><i class="skill devicon-linux-plain"></i> Linux</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills