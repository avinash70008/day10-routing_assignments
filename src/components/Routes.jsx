import { Route } from "react-router-dom";
import {Routes as Abhi} from "react-router-dom"
import { HomePage } from "./HomePage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";

export const Routes = () => {
  return (
    <>
        <Abhi>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          
         </Abhi>
    </>
  );
};