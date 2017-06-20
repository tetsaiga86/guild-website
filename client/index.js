import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'
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

page('/', function () {
  renderComponent(<Home />);
});

page('/spa/members', function () {
  renderComponent(<Members />);
});

page('/spa/achievements', function (){
  renderComponent(<GuildUpdates />);
});

page('/spa/admin', function (){
  renderComponent(<AdminLanding />);
});

page('/spa/recruit_application', function (){
  renderComponent(<RecruitApplication />)
});

page(window.ENV.route);
