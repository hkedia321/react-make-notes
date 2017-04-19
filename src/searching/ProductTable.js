import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
class ProductTable extends Component{
  constructor(){
    super();
  }
  render(){
    var rows=[];
    var lastCategory = null;
    this.props.products.forEach((product) =>{
      if(product.name.toUpperCase().indexOf(this.props.filterText.toUpperCase())==-1 || (!product.stocked && this.props.inStockOnly))
      {
        return null;
      }
      if(product.category !=lastCategory)
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory=product.category;
    });
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

}

export default ProductTable;
