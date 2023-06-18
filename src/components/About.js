import React from "react";

const About = () => {
  return (
  <>
    <div className="about__bg"></div>
    <section className="about">
      <div className="about__container">
        <div className="about__information">
          <h3 className="about__title">Datos curiosos sobre mi</h3>
          <p className="about__paragraph">Desde mi infancia, he sido un apasionado de los perros y siempre he tenido uno como compañero fiel. Creo firmemente que los perros son los mejores amigos del ser humano, y quiero transmitir al mundo el profundo cariño y amor que siento hacia estos maravillosos animales, a través de mi dedicación y compromiso en compartir esta pasión con todos.
          </p>
        </div>
        <img src="/images/about__image.png" alt="" className="about__image"/>
      </div>
    </section>
  </>
  )
}

export default About;
