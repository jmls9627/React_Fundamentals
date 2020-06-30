 import React from 'react';
 import "./AddAuthorForm.css";
import { render } from 'react-dom';
 
class AuthorForm extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:'',
           imageUrl:''
       };
       this.onFieldChange=this.onFieldChange.bind(this);
   }
   onFieldChange(event){
       this.setState({
           [event.target.name]:event.target.value
       });
     
   }
    render(){
  <form>
      <div className="AddAuthorForm__input">
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" value={this.state.name} onFieldChange={this.onFieldChange}/>
      </div>
      <div className="AddAuthorForm__input">
        <label htmlFor='imageUrl'>Image URL</label>
        <input type="text" name="imageUrl" value={this.state.imageUrl} onFieldChange={this.onFieldChange}/>
      </div>
  </form>
   }

}



 function AddAuthorForm({match}){
    return <div className="AddAuthorForm">
     <h1>Add Author</h1>
     
    </div>
  }

  export default AddAuthorForm;