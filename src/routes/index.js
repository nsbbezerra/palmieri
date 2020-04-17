import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/index/index';
import ProductsOne from '../pages/products/example-one';
import ComoFunciona from '../pages/comofunciona/index';
import QuemSomos from '../pages/quemsomos/index';

export default function RoutesApp() {
    return (
        <Switch>
            <Route exact path='/'>
                <Index />
            </Route>
            <Route path='/products'>
                <ProductsOne />
            </Route>
            <Route path='/comofunciona'>
                <ComoFunciona />
            </Route>
            <Route path='/quemsomos'>
                <QuemSomos />
            </Route>
        </Switch>
    )
}