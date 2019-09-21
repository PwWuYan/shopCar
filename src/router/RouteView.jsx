import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
class RouteView extends Component {
    render() {
        let {routes} = this.props;
        let routeArr = routes.filter(item=>!item.redirect)
        let redirectArr = routes.filter(item=>item.redirect)
        return (
           <Switch>
               {
                   routeArr.map((item,index)=>{
                       return <Route key={index} path={item.path} render={
                           (props)=>{
                               return <item.component {...props} children={item.children} />
                           }
                       }></Route>
                   })
               }
               {
                   redirectArr.map((item,index)=>{
                       return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
                   })
               }
           </Switch>
        );
    }
}

export default RouteView;