import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {cities, onClose} = this.props;
    if(cities){
      return (
        <div className='cards'>
          {cities.map(c => <Card
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
            /> )}
        </div>
      );
    } else {
      return(
        <div>Sin ciudades</div>
      )
    }
  }
}