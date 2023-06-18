import React from "react";

const CardInfo = (props) => {

  const dog = props.dog;

  return(
    <>
      <div className="cards__container-card">
        <img src={dog.image.url} alt="" className="cards__image"/>
        <h4 className="cards__title">{dog.name}</h4>
        <p className="cards__description">{dog.life_span}</p>
      </div>
    </>
  )

}

export default CardInfo;
