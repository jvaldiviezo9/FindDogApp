import React from "react";
import CardInfo from "./CardInfo";

const CardContainer = (props) => {
  const dogResults = props.dogResults;

  return (
    <>
      <section className="cards">
        <div className="cards__container">

            {dogResults.map((dog, index) => (
              <CardInfo dog={dog} key={index} />
            ))}

        </div>
      </section>
    </>
  );
};

export default CardContainer;
