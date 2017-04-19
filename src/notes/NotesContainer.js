import React, { Component } from 'react';
import Note from './Note';
import './NotesContainer.css';
class NotesContainer extends Component{
constructor(){
  super();
  let notes=[
    {content:'Mn note',data:''},
    {content:'Mn note2',data:''},
    {content:'Mn note3',data:''},
    {content:'Mn note4',data:''},

  ];
  this.state={notes:notes};
  this.handleUpdate=this.handleUpdate.bind(this);
  this.handleDelete=this.handleDelete.bind(this);
}
handleUpdate(e){
  console.log(e);
}
handleDelete(i){
  var state_temp=this.state.notes;
  state_temp.splice(i,1);
  this.setState({
    notes:state_temp
  });
  console.log(i);

}
handleAddNote(){
    var state_temp=this.state.notes;
    state_temp.push({content:'New Note',data:''});
    this.setState({
      notes:state_temp
    });
}
handleSave(i,con){
    var state_temp=this.state.notes;
    state_temp[i].content=con;
    this.setState({
      notes:state_temp
    });
}
render(){
  let notes=this.state.notes;
  let rows=[];
  notes.forEach((note,i) =>{
    rows.push(<Note note={note} handleUpdate={this.handleUpdate} handleDelete={(i)=>this.handleDelete(i)} handleSave={(i,con)=>this.handleSave(i,con)} key={i} rank={i} />);
  });
  return (
    <div>
    <div className="container-fluid main-container">
      {rows}
    </div>
    <div className="notes-add">
      <span className="add-btn" onClick={()=>this.handleAddNote()}><i className="material-icons">add_circle</i></span>
    </div>
  </div>
  );
}
}
export default NotesContainer;
