import React from "react";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import CatalogMenu from "../catalogMenu/CatalogMenu";
import "./Catalog.css";

const Catalog = () => {
  const { holsts, penscils } = useCatalog();

  console.log(holsts, penscils);

  return (
    <div>
      <CatalogMenu />
    </div>
  );
};

export default Catalog;
