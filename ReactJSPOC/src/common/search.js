import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super();
    this.state = { filterName: '' };
  }

  filterData = (e) => {
    const filterName = e.target.filterName;
    const value = e.target.value;
    if(e.target.value!==""){
    this.setState({ filterName: value });
    this.props.updateFilter(this.state.filterName);
    }
    else{
      this.props.clearFilter();
      this.setState({ filterName: '' });
    }
  }

  render() {
    return (
      <div style={{ padding: '20px', marginLeft: '20px' }}>
        <input type="text"
          value={this.state.filterName} ref="filterInput" name="filterName"
          style={{ width: '300px', padding: '10px' }}
          onChange={event => this.filterData(event)}
        />
        <button
          type="button"
          style={{ padding: '9px', marginLeft: '10px', borderRadius: '3px' }}
          onClick={event => this.filterData(event)}
        >
          Clear
            </button>
      </div >
    )
  }
}