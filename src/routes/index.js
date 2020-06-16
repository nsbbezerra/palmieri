import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/index/index";
import ProductsOne from "../pages/products/products";
import ComoFunciona from "../pages/comofunciona/index";
import QuemSomos from "../pages/quemsomos/index";
import Depoimentos from "../pages/depoimentos/index";
import NotFound from "../pages/notFound/index";
import Contact from "../pages/contacts/index";
import Portifolio from "../pages/portifolio/index";

export default function RoutesApp() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/produtos">
          <ProductsOne />
        </Route>
        <Route path="/comofunciona">
          <ComoFunciona />
        </Route>
        <Route path="/quemsomos">
          <QuemSomos />
        </Route>
        <Route path="/depoimentos">
          <Depoimentos />
        </Route>
        <Route path="/contato">
          <Contact />
        </Route>
        <Route path="/portifolio/:id">
          <Portifolio />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
