import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row" id="skill-row">
          <div className="col-9">
            <div className="skill-bx">
              <h2>Compétences 🚀</h2>
              <ul>
                <li className="li-skills"> HTML/CSS/JS</li>
                <li className="li-skills"> ReactJS </li>
                <li className="li-skills"> NextJS</li>
                <li className="li-skills"> Bootstrap</li>
                <li className="li-skills"> Express.JS</li>
                <li className="li-skills"> NodeJS</li>
                <li className="li-skills"> PHP</li>
              </ul>
              <br></br>
              <h4>Mes prochaines explorations</h4>
              <p className="skills-txt">
                Dans les prochaines semaines, je prévois de découvrir : Laravel,
                Swift, Java, Kotlin, Tailwinds CSS, Nuxt, VueJS, et pourquoi pas
                SvelteKit !
              </p>
              <br></br>
              <h4>Mes intérêts tech</h4>
              <p className="skills-txt">
                Je m'intéresse à la <b>cybersécurité 🔐</b> et à protection des
                données, aux tests et au <b>software craftmanship 🛠️</b>{" "}
                (notamment autour des approches TDD, BDD, DDD), aux pratiques de{" "}
                <b>clean code 🧼</b>, à la
                <b> Green IT 🌱</b> et à <b>l'accessibilité numérique ♿️</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
