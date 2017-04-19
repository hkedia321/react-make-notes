import React, { Component } from 'react';
import Clock from './Clock';
import Forms from './Forms';
import FilterableProductTable from './searching/FilterableProductTable';
import NotesContainer from './notes/NotesContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    return (
      <div>
        {/* <FilterableProductTable products={PRODUCTS} />
         */}
         <NotesContainer />
      </div>
    );
  }
}

export default App;
