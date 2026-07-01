import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Model from "./ui/Model.jsx";
import ModelSkeleton from "./ui/ModelSkeleton.jsx";

const VehicleModels = () => {
  const [carModels, setCarModels] = useState([]);
  const [sort, setSort] = useState("");

  function sortModels() {
    //use if statements to sort the models based on the sort state
    //or use if else statements to sort the models based on the sort state
    //if sort = price high to low
    if (sort === "HIGH_TO_LOW") {
      setCarModels(
        carModels.slice().sort((a, b) => b.per_day_price - a.per_day_price),
      );
      //   different way to sort the models without using slice()
      //   const sortedModels = [...carModels].sort(
      //     (a, b) => b.per_day_price - a.per_day_price
      //   );
      //   setCarModels(sortedModels);
    }
    //if sort = price low to high
    if (sort === "LOW_TO_HIGH") {
      setCarModels(
        carModels.slice().sort((a, b) => a.per_day_price - b.per_day_price),
      );
      //   different way to sort the models without using slice()
      //   const sortedModels = [...carModels].sort(
      //     (a, b) => a.per_day_price - b.per_day_price
      //   );
      //   setCarModels(sortedModels);
    }
    //if sort = rating
    if (sort === "RATING") {
      setCarModels(carModels.slice().sort((a, b) => b.rating - a.rating));
      //   different way to sort the models without using slice()
      //   const sortedModels = [...carModels].sort(
      //     (a, b) => b.rating - a.rating
      //   );
      //   setCarModels(sortedModels);
    }
  }

  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car",
    );
    const models = data.data;
    setCarModels(models);
  }

  useEffect(() => {
    fetchModels();
  }, []);

  useEffect(() => {
    sortModels();
  }, [sort]);

  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select
              value={sort}
              className="models__header__sort"
              onChange={(event) => setSort(event.target.value)}
            >
              <option
                value=""
                disabled
                className="models__header__sort__option"
              >
                Sort
              </option>
              <option
                value="HIGH_TO_LOW"
                className="models__header__sort__option"
              >
                Price: (High to Low)
              </option>
              <option
                value="LOW_TO_HIGH"
                className="models__header__sort__option"
              >
                Price: (Low to High)
              </option>
              <option value="RATING" className="models__header__sort__option">
                Rating: (High to Low)
              </option>
            </select>
          </div>
          <div className="models__list">
            {carModels.length > 0
              ? carModels.map((model) => <Model model={model} key={model.id} />)
              : new Array(20)
                  .fill(0)
                  .map((_, index) => <ModelSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
