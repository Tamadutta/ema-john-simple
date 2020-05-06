import React from 'react';
import './App.css';
import HEADER from './components/Header Component/HEADER';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/Product Detail/ProductDetail';
import Login from './components/Login/Login';
import { AuthProvider, PrivateRoute } from './components/Login/useAuth';
import Shipment from './components/Shipment/Shipment';



function App(props) {
  return (
    <div>
      <AuthProvider>
       <HEADER></HEADER>

      <Router>
        <Switch>
          <Route path="/shop">
              <Shop> </Shop>
          </Route>
          <Route path = "/review">
            <Review></Review>
          </Route>
          <Route path = "/manage">
              <Manage></Manage>
          </Route>
          <Route exact path ="/">
             <Shop></Shop>
          </Route>
          <Route path ="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
          <Route path = "/login">
              <Login> </Login>
         </Route>
         <PrivateRoute path = "/Shipment">
            <Shipment></Shipment>
         </PrivateRoute>
          <Route path = "*">
              <NotFound></NotFound>
          </Route>
         
        </Switch>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
