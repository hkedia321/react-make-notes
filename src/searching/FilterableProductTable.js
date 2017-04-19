import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends Component{
  constructor(props){
    super(props);
    let PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    this.state={filterText:'',inStockOnly:false,products:PRODUCTS};
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);

  }
  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render(){

    return(
      <div className="container" style={{color:'#000'}}>
<SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput} />
<ProductTable products={this.state.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
</div>
  );
  }
}

export default FilterableProductTable;
