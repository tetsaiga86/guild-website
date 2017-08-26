import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'
import About from './components/about'
import Members from './components/members'
import GuildUpdates from './components/guildUpdates'
import AdminLanding from './components/adminLanding'
import RecruitApplication from './components/recruitApplication'

function renderComponent(component) {
  ReactDOM.render(
    component,
    document.getElementById('app')
  );
}

page('*', function (context, next) {
  ga('set', 'page', context.path);
  ga('send', 'pageview');
  next();
})

page('/', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<Home />);
});

page('/spa/about', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<About />);
})

page('/spa/members', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<Members />);
});

page('/spa/achievements', function (){
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<GuildUpdates />);
});

page('/spa/admin', function (){
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<AdminLanding />);
});

page('/spa/recruit_application', function (){
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<RecruitApplication />)
});

page(window.ENV.route);
