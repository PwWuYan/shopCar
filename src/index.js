import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './views/index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import RouteView from './router/RouteView'
import routes from './router/route.config'
import store from './store/store'
import axios from 'axios';
axios.get('/list').then(res=>{
    console.log(res)
    store.dispatch({
        type:'GET_LIST',
        data:res.data.data
    })
})

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <RouteView routes={routes}>
            < Index / >
            </RouteView>
        </BrowserRouter>
    </Provider>
     , document.getElementById('root'));