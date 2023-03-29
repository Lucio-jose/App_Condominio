import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage";
import NotFound from "../Pages/404";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Signup";

import DashAdmin from "../Pages/DashAdmin";
import Apartamentos from "../Pages/DashAdmin/Pages/Apartamentos";
import Reservas from "../Pages/DashAdmin/Pages/Reservas";
import Contratos from "../Pages/DashAdmin/Pages/Contratos";

import DashClient from "../Pages/DashClient";
import FormComprar from "../Pages/DashClient/Pages/FormComprar";
import Reserva from "../Pages/DashClient/Pages/Reservas";
import Contrato from "../Pages/DashClient/Pages/Contrato";

import { PrivateRoute, RouteNonAcess } from "./data/routes";


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/> 
      <Route path="/signup" component={Cadastro}/> 

      <Route path="/admin" component={DashAdmin}/> 
      <Route path="/apartamentos" component={Apartamentos}/>
      <Route path="/reserved" component={Reservas}/>
      <Route path="/contratos" component={Contratos}/>

      <Route path="/dashclient" component={DashClient}/>
      <Route path="/clientcomprar" component={FormComprar}/>
      <Route path="/reservafeita" component={Reserva}/>
      <Route path="/contratosreading" component={Contrato}/>
    
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
