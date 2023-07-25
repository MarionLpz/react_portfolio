export const About = () => {
  return (
    <section className="about">
      <h2>A propos</h2>
      <p>
        D'aussi loin que je me souvienne, j'ai toujours adoré bidouiller mon
        ordinateur, explorer ses méandres et naviguer dans les bras tortueux
        d'internet. C'est pour cela que j'ai toujours orienté mes expériences
        professionnelles, dans la communication et le journalisme, autour du
        numérique. <br></br>Jusqu'ici, j'ai eu l'impression de ne connaître que
        la partie émergée de l'iceberg (la production de contenu, les mécaniques
        sociales, le marketing digital...) mais, comme souvent, c'est la partie
        immergée qui m'intrigue le plus. J'ai longtemps hésité, ne sachant trop
        par quel côté m'attaquer à ce colosse... <br></br>
        Finalement, j'ai confié aux encadrants d'Ada Tech School la mission de
        me guider dans ce nouvel apprentissage pour m'aider à me former. C'est
        donc entourée de professionnels que j'ai commencé ma grande plongée dans
        l'immensité du code.
      </p>
      <p>
        La prochaine étape ? Trouver une alternance pour me professionnaliser.
      </p>

      <p style={{ fontWeight: "600" }}>
        Et si on faisait équipe pour la suite ? 🤝
        <div>
          <button className="vvd">
            <a href="/doc/cvml.pdf" download="CV-MarionLopez-dev.pdf">
              <span>Télécharger mon CV</span>
            </a>
          </button>
        </div>
      </p>
    </section>
  );
};
