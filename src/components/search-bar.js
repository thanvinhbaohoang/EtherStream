/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChange} value={this.state.searchterm} placeholder="Search..." />
      </div>
    );
  }
}

export default SearchBar;
