import React from "react";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import CatalogMenu from "../catalogMenu/CatalogMenu";
import "./Catalog.css";

const Catalog = () => {
  const { holsts, penscils, activeCatagory, setActiveCatagory } = useCatalog();

  console.log(activeCatagory)

  return (
    <div>
      <CatalogMenu activeCatagory={activeCatagory} setActiveCatagory={setActiveCatagory} />
    </div>
  );
};

export default Catalog;
