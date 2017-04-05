import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'

function renderComponent(component) {
  ReactDOM.render(
    component,
    document.getElementById('app')
  );
}

page('*', function () {
  renderComponent(<Home />);
});

page();
