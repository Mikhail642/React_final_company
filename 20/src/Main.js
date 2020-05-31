import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import home from './Home';
import ocompanyy from './ocompanyy';
import  s from './index.module.css';


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className={s.div}> 
                    <h1>Финальный проект на реакт</h1>
                    <ul className="header">
    <li><NavLink exact to="/home">Главная</NavLink></li>
    <li><NavLink to="/ocompanyy">О компании</NavLink></li>
</ul>
                    <div className="content">
    <Route exact path="/home" component={home} />
    <Route path="/ocompanyy" component={ocompanyy} />
</div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
