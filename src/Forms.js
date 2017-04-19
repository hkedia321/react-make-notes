import React from 'react';

class Forms extends React.Component{
  constructor(){
    super();
    this.state={
      name:'',
      age:'',
      gender:'',
      about:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){
    const target=event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    console.log(this.state);
    event.preventDefault();
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text" name="name" required value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>Age:
            <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />
          </label>
            <br />
          <label>
          <input type="radio" name="gender" value="male" checked={this.state.gender=='male'} onChange={this.handleInputChange} />
            Male
          </label>
          <label>
          <input type="radio" name="gender" value="female" checked={this.state.gender=='female'} onChange={this.handleInputChange} />
            Female
          </label>
            <br />
          <textarea name="about" value={this.state.about} onChange={this.handleInputChange} />
            <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Forms;
