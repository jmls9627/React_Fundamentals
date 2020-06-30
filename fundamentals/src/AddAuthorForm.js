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
   }
    render(){
  <form>
      <div className="AddAuthorForm__input">
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" value={this.state.name} />
      </div>
      <div className="AddAuthorForm__input">
        <label htmlFor='imageUrl'>Image URL</label>
        <input type="text" name="imageUrl" value={this.state.imageUrl} />
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