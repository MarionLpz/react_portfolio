import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row" id="skill-row">
          <div className="col-9">
            <div className="skill-bx">
              <h2>Compétences</h2>
              <p className="skills-txt">
                <ul>
                  <li className="li-skills"> HTML/CSS/JS</li>
                  <li className="li-skills"> ReactJS </li>
                  <li className="li-skills"> NextJS</li>
                  <li className="li-skills"> Bootstrap</li>
                  <li className="li-skills"> Express.JS</li>
                  <li className="li-skills"> NodeJS</li>
                  <li className="li-skills"> PHP</li>
                </ul>
                <br></br>✅ Sur ma to-do list, il y a : Tailwinds CSS, Nuxt,
                VueJS, et pourquoi pas SvelteKit !<br></br>
                <br></br>
                Je m'intéresse à la <b>cybersécurité 🔐</b> et à protection des
                données, <br></br>aux tests et au{" "}
                <b>software craftmanship 🛠️</b> (notamment autour des approches
                TDD, BDD, DDD), <br></br>aux pratiques de <b>clean code 🧼</b>,
                à la
                <b> Green IT 🌱</b> et à <b>l'accessibilité numérique ♿️</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
