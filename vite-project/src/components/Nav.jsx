import React from 'react';

import SearchBar from './SearchBar.jsx';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {onSearch} = this.props;
    return (
      <nav class="navbar navbar-dark bg-dark">

      <h1 className='navbar-brand'>Herny Weather App</h1>
        <SearchBar onSearch={onSearch}/>
      </nav>
    );
  }
}

export default Nav;