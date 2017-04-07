import React from 'react'
import Collapsible from './collapsible'
import ButtonGroup from './buttonGrp'

const raids = [
  {
    title: 'Nighthold',
    body: 'use api for guild achievement and boss names'
  },
  {
    title: 'Trial of Valor',
    body: 'use api for guild achievement and boss names'
  },
  {
    title: 'The Emerald Nightmare',
    body: 'use api for guild achievement and boss names'
  }
];

class Progress extends React.Component {
  render () {
    const renderedRaids = [];

    raids.forEach((raid) => {
      const defaultOpen = renderedRaids.length === 0;
      renderedRaids.push(<Collapsible title={raid.title} body={raid.body} key={raid.title} defaultOpen={defaultOpen}/>);
    });

    return (
      <div>
        <h2>Progression</h2>
        <ButtonGroup />
        {renderedRaids}
      </div>
    );
  }
}

export default Progress
