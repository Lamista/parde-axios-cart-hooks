import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/NavigationComponent';
import CardList from './containers/CardListContainer';
import ProductAdministrationForm from './containers/ProductAdministrationFormContainer';
import AdminListContainer from './containers/AdminListContainer'
import ProductDetails from './containers/ProductDetailsContainer';
import NoMatch from './components/NoMatchComponent';
import UpdateAdminFormComponent from './components/UpdateAdminFormComponent'
import CartDetailsComponent from './components/CartDetailsComponent'

import CurrentUserContext from './context/CurrentUserContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [cartCount, setCartCount] = useState(0);
  const saveUser = (name) => setCurrentUser(name);
  const updateCartCount = (value) => setCartCount(value);

  return (
    <div>
      <CurrentUserContext.Provider value={{
        currentUser,
        saveUser,
        cartCount,
        updateCartCount
      }}>
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
      </CurrentUserContext.Provider>
    </div>
  )
}
export default App;
