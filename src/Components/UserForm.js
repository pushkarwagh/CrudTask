import React from "react";
//import {nanoid} from 'nanoid';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'' , email:'' , gender:'' , contact:'',id:'',value:''
    };

  }

  handleInput = (event) =>{
    event.preventDefault();
    const fieldName = event.target.getAttribute('name') ;
    const fieldValue = event.target.value;

    const newFormData  = {...this.state};
    newFormData[fieldName] = fieldValue;

    this.setState(newFormData)
  }

  submitForm = (event) =>{
    event.preventDefault();

    const newUserData = {
      name:this.handleInput.name ,
      email: this.handleInput.email ,
      gender:this.handleInput.gender ,
      contact:this.handleInput.contact 
    };

    const newUserSdata = [...this.props.state , newUserData]
    this.props.setState(newUserSdata);

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
  
  render() {
    return (
      <>
        <div className="container my-2 p-2" style={{ backgroundColor: 'lightblue' }}>
          <Form className=" border border-primary p-2" >

            <label>
              UserId:
              <input disabled type="Number" placeholder='Disabled'/*value={this.state.value} onChange={this.handleChange}*/ />
            </label> 
            <button type="button"  onClick={this.generateId}> Generate-Id </button> <br/>

            <label>
              Name:
              <input type="text" name='name' value={this.state.name} onChange={this.handleInput} required/>
            </label> <br/>

            <label>
              Gender:
              <input type="radio" name='gender' value='male' checked={this.state.gender === 'male'}  onChange={this.handleInput} />M
              <input type="radio" name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleInput} />F
            </label> <br/>

            <label>
              E-mail:
              <input type="email" name='email' value={this.state.email} onChange={this.handleInput} required/>
            </label> <br/>

            <label>
              Contact:
              <input type="Number"  name='contact' value={this.state.contact} onChange={this.handleInput} required/>
            </label> <br/>

          </Form>

          <footer className="m-2 ">
            <button type="submit" onClick={this.submitForm} > Submit </button>
            <button type="cancel" onClick={this.cancelForm} > <Link to='/userRecords' style={{ textDecoration: 'none', margin: '2px' }}> Cancel </Link> </button>
            <button type="reset" onClick={this.resetForm} > Reset </button>
          </footer>

        </div>
      </>
    );
  }
}

export default UserForm;