import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Goods from './Goods'
import './style.css'

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/men/:id" component={Goods}/>
                    <Route path="/women/:id" component={Goods}/>
                </Switch>
            </main>
        )
    }
}

export default Main
