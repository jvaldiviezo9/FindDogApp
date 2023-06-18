import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";

const Explore = (props) => {
  
  const dogInfo = props.dogInfo;
  const [dogResults, setDogResults] = useState([]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newIsFixed = window.scrollY > 900;
      setIsFixed(newIsFixed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event) => {
    const search_arr = searchObjectsByName(dogInfo, event.target.value);
    setDogResults(search_arr);
  };

  function searchObjectsByName(arr, search) {
    return arr.filter((obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const searchContainerClass = isFixed ? " explore__fixed" : "";

  return (
    <>
      <section className="explore">
        <p className="explore__description">
          Indícame una letra para filtrar las razas de perros:
        </p>
        <div className={"explore__container" + searchContainerClass}>
          <input
            onChange={handleChange}
            type="text"
            className={"explore__input"}
          />
          <button className="explore__button">Buscar</button>
        </div>
      </section>
      <CardContainer dogResults={dogResults} />
    </>
  );
};

export default Explore;
