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
      <div className="col s12 input-field">
      <input type="text" id="search" value={this.props.filterText} onChange={this.handleFilterTextInputChange} />
      <label htmlFor="search">Search..</label>
    </div>
      <br />
      <input type="checkbox" id="instock" checked={this.props.inStockOnly? true: false} onChange={this.handleInStockInputChange} />
      <label htmlFor="instock">  only show products in stock</label>
      {' '}

    </form>
  )
}
}

export default SearchBar;
