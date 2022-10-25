import React, { useEffect, useState } from "react";

export const useCatalog = () => {
  const [holsts, setHolsts] = useState([]);
  const [penscils, setPencils] = useState([]);
  const [activeCatagory, setActiveCatagory] = useState("holsts")

  const getHolsts = async () => {
    const responce = await fetch(
      "https://my-json-server.typicode.com/Zoolgrand/VikaDB/holsts"
    );
    const data = await responce.json();
    setHolsts(data);
  };

  const getPensils = async () => {
    const responce = await fetch(
      "https://my-json-server.typicode.com/Zoolgrand/VikaDB/penscil"
    );
    const data = await responce.json();
    setPencils(data);
  };

  useEffect(() => {
    getHolsts();
    getPensils();
  }, []);

  return { holsts, penscils,activeCatagory, setActiveCatagory };
};
