import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AdminRoute, PrivateRoute, RouteNonAcess } from './data/routes';
import Home from "../Pages/HomePage";
import NotFound from "../Pages/404";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Signup";

import DashAdmin from "../Pages/DashAdmin";
import Apartamentos from "../Pages/DashAdmin/Pages/Apartamentos";
import Reservas from "../Pages/DashAdmin/Pages/Reservas";
import Contratos from "../Pages/DashAdmin/Pages/Contratos";
import Posts from "../Pages/DashAdmin/Pages/Posts";

import DashClient from "../Pages/DashClient";
import FormComprar from "../Pages/DashClient/Pages/FormComprar";
import Reserva from "../Pages/DashClient/Pages/Reservas";
import Contrato from "../Pages/DashClient/Pages/Contrato";
import VewPosts from "../Pages/DashClient/Pages/Posts";
 
//import { PrivateRoute, RouteNonAcess } from "./data/routes";


function Routes() { 
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <RouteNonAcess path="/login" component={Login}/> 
      <Route path="/signup" component={Cadastro}/> 

      <AdminRoute exact path="/admin" component={DashAdmin}/>
      <AdminRoute path="/apartamentos" component={Apartamentos}/>
      <AdminRoute path="/reserved" component={Reservas}/>
      <AdminRoute path="/contratos" component={Contratos}/>
      <AdminRoute path="/posts" component={Posts}/>

      <PrivateRoute path="/dashclient" component={DashClient}/>
      <PrivateRoute path="/clientcomprar/:id" component={FormComprar}/>
      <PrivateRoute path="/reservafeita" component={Reserva}/>
      <PrivateRoute path="/contratosreading" component={Contrato}/>
      <PrivateRoute path="/publications" component={VewPosts}/>
    
      <Route path="*" component={NotFound} />
    </Switch>
</BrowserRouter>
  );
}

export default Routes;
