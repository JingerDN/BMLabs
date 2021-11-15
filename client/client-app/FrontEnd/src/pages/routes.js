import React from "react";

import { Switch, Route, Redirect, Router } from "react-router-dom";
import Main from "./Main/";
import Users from "./Users/";
import UserStatistics from "./UserStatistics/";


export const useRoutes = () => {
 {
    return (
      <Switch>
        <Route exact path="/" render={()=><Main/>}/>
      
        <Route exact path="/main" render={()=><Main/>}/>

        <Route exact path="/users/list" render={()=><Users/>} />

        <Route exact path="/user-statistics/:id" render={() => <UserStatistics/> }/>
      </Switch>
    );
  }
}