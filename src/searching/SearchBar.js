import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(){
    super();
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
render(){
  return(
    <form>
      <input type="text" placeholder="search..." value={this.props.filterText} onChange={this.handleFilterTextInputChange} />
      <br />
      <input type="checkbox" checked={this.props.inStockOnly? true: false} onChange={this.handleInStockInputChange} />
      {' '}
      only show products in stock
    </form>
  )
}
}

export default SearchBar;
