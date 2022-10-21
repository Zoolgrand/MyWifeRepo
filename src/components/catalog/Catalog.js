import React from "react";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import "./Catalog.css";

const Catalog = () => {
  const { holsts, penscils } = useCatalog();

  console.log(holsts, penscils);

  return <div></div>;
};

export default Catalog;
