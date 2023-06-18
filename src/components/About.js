import React from "react";

const About = () => {
  return (
  <>
    <div className="about__bg"></div>
    <section className="about">
      <div className="about__container">
        <div className="about__information">
          <h3 className="about__title">Datos curiosos sobre mi</h3>
          <p className="about__paragraph">Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.
            Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.
          </p>
        </div>
        <img src="/images/about__image.png" alt="" className="about__image"/>
      </div>
    </section>
  </>
  )
}

export default About;
