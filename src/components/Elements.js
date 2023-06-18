import React from "react";

const Elements = () => {
  return (
    <>
    <section className="elements">
      <div className="elements__info">
        <h2 className="elements__title">Lo que ofrecemos</h2>
        <p className="elements__text">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente.</p>
      </div>
      <div className="elements__card">
        <div className="elements__card-container">
          <img src="/images/elements__image_1.png" alt="A golden dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_2.png" alt="A golden dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_3.png" alt="A golden dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_4.png" alt="A golden dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_5.png" alt="A golden dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_6.png" alt="A golden dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden</h3>
        </div>
      </div>
    </section>
    </>
  )
}

export default Elements;
