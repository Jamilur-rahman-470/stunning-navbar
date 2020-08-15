import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar.comp';
import Home from './view/home.view';
import Contact from './view/contact.view';
import About from './view/about.view';
import Support from './view/support.view';
import Meet from './view/meet.view';
import Work from './view/work.view';


const Root = () => {
    return (
        <BrowserRouter>
           <Navbar/>
           <Switch>
               <Route exact path = '/' component={Home}/>
               <Route exact path = '/contact' component={Contact}/>
               <Route exact path = '/about' component = {About}/>
               <Route exact path = '/support' component = {Support}/>
               <Route exact path = '/meet' component = {Meet} />
               <Route exact path = '/work' component = {Work}/>
           </Switch>
        </BrowserRouter>
    )
}

export default Root
