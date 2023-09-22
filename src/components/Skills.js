import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row" id="skill-row">
          <div className="col-9">
            <div className="skill-bx">
              <h2>Compétences 🚀</h2>
              <p className="skills-txt">
                Je mets un point d'honneur à me construire un{" "}
                <b>profil full-stack</b> mais je dois bien avouer une dominante
                front. J'ai le goût du design et de construire des interfaces
                agréables et instinctives pour les utilisateurs. Je sais
                utiliser la suite Adobe et les outils de conception graphique
                (suite Abode).
              </p>
              <h4>Coups de ♥︎ techniques</h4>
              <ul className="skills-txt">
                <li className="li-skills"> HTML/CSS/JS</li>
                <li className="li-skills"> ReactJS </li>
                <li className="li-skills"> React Native </li>
                <li className="li-skills"> NextJS</li>
                <li className="li-skills"> Bootstrap</li>
                <li className="li-skills"> NodeJS</li>
                <li className="li-skills"> Express</li>
                <li className="li-skills"> Git</li>
              </ul>
              <br></br>
              <h4>Prochaines explorations</h4>
              <p className="skills-txt">
                Au fil de ma formation, j'ai également pu m'exercer avec :{" "}
                <b>Angular</b>, <b>PHP</b>, <b>Laravel</b>, <b>Docker</b> ou
                encore <b>SQL</b>. J'ai aussi découvert : <b>Java</b> ou{" "}
                <b>Python</b>.
              </p>
              <p className="skills-txt">
                Dans les prochaines semaines, je prévois de découvrir :
                <b>Taillwind CSS</b>, <b>Nuxt</b>, <b>VueJS</b>, et pourquoi pas{" "}
                <b>SvelteKit</b> ou <b>Astro</b> !
              </p>
              <br></br>
              <h4>Intérêts tech</h4>
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
