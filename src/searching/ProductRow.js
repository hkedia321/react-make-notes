import React, { Component } from 'react';

class ProductRow extends Component{
  render(){
    var name=this.props.product.stocked ?
    this.props.product.name:
    <span style={{color:'red'}}>
      {this.props.product.name}
    </span>
    return(
    <tr>
      <td>{name}</td>
      <td>{this.props.product.price}</td>
    </tr>
    );

  }
}

export default ProductRow;
