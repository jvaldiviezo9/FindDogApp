import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return(
    <>
      <main className="main">
        <div className="main__information">
          <h1 className="main__title">Cuida. Educa. Ama.</h1>
          <p className="main__paragraph">Buscador de razas de todos los perros en el mundo</p>
          <Link to="/app" className="main__link">
          <button className="main__button"><a className="main__button-link">Empezar</a></button>
          </Link>
        </div>
        <img className="main__image" src="/images/main__image.png" alt="A dog"/>
      </main>
    </>
  )
}

export default Main;
