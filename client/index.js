import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'
import Members from './components/members'

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

page(window.ENV.route);
