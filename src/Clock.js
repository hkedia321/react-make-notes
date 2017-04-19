import React, { Component } from 'react';

class Clock extends Component {
  constructor(){
      super();
      this.state={
        date:new Date(),
        isToggleOn: true
      };
      this.name="Harshit Kedia";
      //this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.timerId=setInterval(
      ()=>this.tick(),
      1000
    );
  }
  tick(){

  //  this.state={date:new Date()};

    this.setState({
      date: new Date()
    });

  }
changeName(){
  this.name="str";
  this.setState({
  });

}
handleClick(){

  this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
}
handleClickAnchor(e){
  e.preventDefault();
    console.log('The link was clicked.');

}
  render() {
    let favItems;
    const items=['apples','oranges','guava'];
    favItems= items.map((item,i)=>
    <li key={i}>{item} no {i}</li>
  );
    return (
      <div>
      <div>Hello {this.name}</div>
      <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
      <button onClick={()=>this.handleClick()} >{this.state.isToggleOn ? 'on':'off'}</button>
      <a href="#" onClick={this.handleClickAnchor}>link to disable</a>

      <ol>{favItems}</ol>
    </div>
    );
  }
}

export default Clock;
