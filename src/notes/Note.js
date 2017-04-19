import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

class Note extends Component{
  constructor(props){
    super(props);
    this.state={editMode:false,content:this.props.note.content};
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleDelete(){
    this.props.handleDelete(this.props.rank);
  }
  handleSave(){
    this.setState({
      editMode:false
    });
    this.props.handleSave(this.props.rank,this.state.content);
  }
  handleTextChange(event){
    const target = event.target;
    this.setState({
      content:target.value
    });

  }
  onEditClick(){
    this.setState({
      editMode:true
    });
  }

  generateRandom(min,max){
    return (min+Math.ceil(Math.random()*max));
  }
  componentWillMount(){
    this.style={
      right:this.generateRandom(0,window.innerWidth -200) + 'px',
      top:this.generateRandom(0,window.innerHeight - 200) + 'px',
      transform : 'rotate('+this.generateRandom(-15,35) + 'deg)'
    };
  }
  componentDidMount(){
  //$(ReactDOM.findDOMNode(this)).draggable();
  }
  render(){
    return (
    <div className="anote card" style={this.style}>
      <div className="note-content center">
      {!this.state.editMode && this.props.note.content}
      {this.state.editMode &&
          <textarea name="content" className="" value={this.state.content} onChange={this.handleTextChange} />
      }
    </div>
    <div className="note-buttons">
      {!this.state.editMode &&
        <div>
      <button onClick={()=>this.handleDelete()} className="btn waves-effect red"><i className="material-icons">delete</i></button>
        <button onClick={()=>this.onEditClick()} className="btn waves-effect green"><i className="material-icons">mode_edit</i></button>
      </div>
      }
      {this.state.editMode &&
        <div>
          <button className="btn waves-effect orange save-btn" onClick={()=>this.handleSave()}><i className="material-icons">save</i></button>
        </div>
      }
    </div>
    </div>
  );
  }
}
export default Note;
