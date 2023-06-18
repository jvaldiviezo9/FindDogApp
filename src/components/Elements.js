import React from "react";

const Elements = () => {
  return (
    <>
    <section className="elements">
      <div className="elements__info">
        <h2 className="elements__title">Lo que ofrecemos</h2>
        <p className="elements__text">Encuentra tu compañero canino ideal con nuestro buscador de razas de perros. Descubre información detallada y encuentra el perro perfecto para ti.</p>
      </div>
      <div className="elements__card">
        <div className="elements__card-container">
          <img src="/images/elements__image_1.png" alt="A Golden Retriever dog" className="elements__image"/>
          <h3 className="elements__card-title">Golden Retriever</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_2.png" alt="A Rottweiler dog" className="elements__image"/>
          <h3 className="elements__card-title">Rottweiler</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_3.png" alt="An English Mastiff dog" className="elements__image"/>
          <h3 className="elements__card-title">English Mastiff</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_4.png" alt="A Whippet dog" className="elements__image"/>
          <h3 className="elements__card-title">Whippet</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_5.png" alt="A Poodle dog" className="elements__image"/>
          <h3 className="elements__card-title">Poodle</h3>
        </div>
        <div className="elements__card-container">
          <img src="/images/elements__image_6.png" alt="A Husky dog" className="elements__image"/>
          <h3 className="elements__card-title">Husky</h3>
        </div>
      </div>
    </section>
    </>
  )
}

export default Elements;
