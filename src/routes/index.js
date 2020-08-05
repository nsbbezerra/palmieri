import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/index/index";
import ProductsOne from "../pages/products/products";
import ComoFunciona from "../pages/comofunciona/index";
import QuemSomos from "../pages/quemsomos/index";
import NotFound from "../pages/notFound/index";
import Contact from "../pages/contacts/index";
import Catalogo from "../pages/products/catalog";

export default function RoutesApp({
  products,
  categories,
  url,
  comments,
  catalog,
  models,
  tables,
}) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Index
            category={categories}
            product={products}
            url={url}
            comments={comments}
            catalog={catalog}
          />
        </Route>
        <Route path="/produtos/:prod">
          <ProductsOne category={categories} product={products} url={url} />
        </Route>
        <Route path="/comofunciona">
          <ComoFunciona />
        </Route>
        <Route path="/quemsomos">
          <QuemSomos />
        </Route>
        <Route path="/contato">
          <Contact />
        </Route>
        <Route path="/catalogo/:id">
          <Catalogo
            product={products}
            url={url}
            models={models}
            tables={tables}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
