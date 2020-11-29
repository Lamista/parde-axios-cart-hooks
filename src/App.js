import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/NavigationComponent';
import CardList from './containers/CardListContainer';
import ProductAdministrationForm from './containers/ProductAdministrationFormContainer';
import AdminListContainer from './containers/AdminListContainer'
import ProductDetails from './containers/ProductDetailsContainer';
import NoMatch from './components/NoMatchComponent';
import UpdateAdminFormComponent from './components/UpdateAdminFormComponent'
import CartDetailsComponent from './components/CartDetailsComponent'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={CardList} />
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/products" component={CardList} />
      <Route path="/admin/products/new" component={ProductAdministrationForm} />
      <Route path="/admin/products/:id" component={UpdateAdminFormComponent} />
      <Route path="/admin/products" component={AdminListContainer} />
      <Route path="/users/:username/cart-products" component={CartDetailsComponent} />
      <Route path="*" component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
    {props.children}
  </div>
)

export default App;
