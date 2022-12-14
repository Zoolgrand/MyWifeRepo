import React from "react";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import CatalogMenu from "../catalogMenu/CatalogMenu";
import Galary from "../galary/Galary";
import GalaryItem from "../galaryItem/GalaryItem";
import "./Catalog.css";

const Catalog = () => {
  const { holsts, penscils, activeCatagory, setActiveCatagory } = useCatalog();

  return (
    <div className="catalog">
      <CatalogMenu
        activeCatagory={activeCatagory}
        setActiveCatagory={setActiveCatagory}
      />
      <Galary
        holsts={holsts}
        penscils={penscils}
        activeCatagory={activeCatagory}
      />
    </div>
  );
};

export default Catalog;
