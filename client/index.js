import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'
import Members from './components/members'
import Achievements from './components/achievements'

function renderComponent(component) {
  ReactDOM.render(
    component,
    document.getElementById('app')
  );
}

page('/', function () {
  renderComponent(<Home />);
});

page('/spa/members', function () {
  renderComponent(<Members />);
});

page('/spa/achievements', function (){
  renderComponent(<Achievements />);
});

page(window.ENV.route);
