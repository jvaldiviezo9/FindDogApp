import React, {useEffect, useState} from "react";
import Explore from "./Explore";

const WebApp = () => {

  const [dogInfo, setDogInfo] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://api.thedogapi.com/v1/breeds?limit=500&page=0'
          );
          const data = await response.json();
          setDogInfo(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();

    }, [])


  return (
    <>
      <section className="web">
        <div className="web__background">
        </div>
          <h1 className="web__title">APLICACIÓN</h1>
          <div className="web__container">
            <div className="web__info">
              <p className="web__text">Es un buscador de razas de perros por letra, con esto puedes encontrar los siguientes puntos:</p>
              <ul className="web__list">
                <li className="web__item">Nombre de la raza</li>
                <li className="web__item">Imagen de la raza</li>
                <li className="web__item">Descripción de la raza</li>
              </ul>
            </div>
            <div className="web__image-container">
              <img src="/images/web__image.png" alt="" className="web__image"/>
            </div>
          </div>
      </section>
      <Explore dogInfo={dogInfo} setDogInfo={setDogInfo}/>

    </>
  )
}

export default WebApp;
