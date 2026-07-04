import React from "react";
import ModelHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import Booking from "../components/ui/Booking";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Models = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car",
    );
    const models = data.data;
    setCarModels(models);
  }

  useEffect(() => {
    console.log("Booking Open:", bookingOpen);
  }, [bookingOpen]);

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <>
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
        selectedModel={selectedModel}
      />
      <ModelHero />
      <VehicleModels
        carModels={carModels}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
