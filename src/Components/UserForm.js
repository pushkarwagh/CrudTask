import React from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { func } from 'prop-types';

class UserForm extends React.Component {
  constructor(props) {
    super(props);   
    this.state={
      id:0,
      name:'' ,
      gender:'' ,
      email:'',
      contact:''
    };

  }

  // handleInput = (event) =>{
  //   event.preventDefault();    
  //   const fieldName = event.target.getAttribute('name') ;
  //   const fieldValue = event.target.value;
  //   const newFormData  = {...this.state};
  //   newFormData[fieldName] = fieldValue;
  //   this.setState(newFormData)
  // }

  // submitForm = (event) =>{
  //   event.preventDefault();
  //   const newUserData = {
  //     name:this.handleInput.name ,
  //     email: this.handleInput.email ,
  //     gender:this.handleInput.gender ,
  //     contact:this.handleInput.contact 
  //   };

  //   const newUserdata = [...this.props.state , this.state]
  //   this.props.setState(newUserdata);
  // }

 checkForm = () => {
   console.log(this.state)
 }
  
  generateId = () => {
    this.setState( { id: Number(this.state.id+1) } )
    console.log(this.state.id)
  }

  resetForm = () => {
    console.log('reset form')
    this.setState({
      id:'', name:'' , gender:'' , email:'', contact:''
    });
  }

  cancelForm = () => {
    console.log('cancel form')
    this.setState({
      id:'', name:'' , gender:'' , email:'', contact:''
    });    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id:this.state.id,
      name:this.state.name ,
      gender:this.state.gender,
      email:this.state.email,
      contact:this.state.contact
    };
    this.props.addFormData(formData)
  }
  
  render() {
    const {id,name,gender,email,contact,handleInputChange} = this.props;
    // const {name,gender,email,contact} = newUserData;
    return (
      <>
        <div className="container my-2 p-2" style={{ backgroundColor: 'lightblue' }}>
            Add-User
          <Form className=" border border-primary p-2"  /*onSubmit={this.submitForm}*/> 

            <label className="mb-1 p-2">
              Name:
              <input type="text" name='name' value={this.state.name} onChange={ () => handleInputChange } required/>
            </label> <br/>

            <label className="mb-1 p-2" >
              
              Gender:
              <input className="ms-2" type="radio" name='gender' value='m' checked={this.state.gender === 'm'}  onChange={ () => handleInputChange } />
                m
            
              <input className="ms-2" type="radio" name='gender' value='f' checked={this.state.gender === 'f'} onChange={ () => handleInputChange } />
                f
              

            </label> <br/>

            <label className="mb-1 p-2">
              E-mail:
              <input type="email" name='email' value={this.state.email} onChange={ () => handleInputChange } required/>
            </label> <br/>

            <label className="mb-1 p-2">
              Contact:
              <input type="Number"  name='contact' value={this.state.contact} onChange={ () =>handleInputChange } required/>
            </label> <br/>

            <label className="mb-1 p-2">
              UserId:
              <input disabled type="Number" placeholder='Disabled'/*value={this.state.value} onChange={this.handleChange}*/ />
            </label> 
            <button type="button"  onClick={this.generateId} className='mx-2'> Generate-Id </button> <br/>

          </Form>

          <footer className="m-2 ">

            <button type="submit" onClick={this.handleSubmit} > 
              <Link to='/userRecords' style={{ textDecoration: 'none', color:'black' }}> Submit </Link> 
            </button>
            <button type="cancel" onClick={this.cancelForm} >
               <Link to='/userRecords' style={{ textDecoration: 'none', color:'black' }}> Cancel </Link>
            </button>
            <button type="reset" onClick={this.resetForm} > Reset </button>

          </footer>

        </div>
      </>
    );
  }
}

export default UserForm;

UserForm.propTypes = {
    handleInputChange: func.isRequired,
};