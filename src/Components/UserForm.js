import React from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { func } from 'prop-types';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      gender: '',
      email: '',
      contact: { cc: 91, num: '' }
    };
    
  }

  componentWillUnmount() {
    alert('leaving the form page!')
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

  //  checkForm = () => {
  //    console.log(this.state)
  //  }
 

  componentDidMount() {
    console.log("no of id: ", this.props.ids.length)
    this.setState({ id: Number(this.props.ids.length) })
    
  } 
  
  generateId = () => {
    
     this.setState({ id: Number(this.state.id+1) })
     console.log("idvalue: " ,this.state.id)
    
  }

  resetForm = () => {
    console.log('reset form')
    this.setState({
      id:this.props.ids.length , name: '', gender: '', email: '', contact: { cc: 91, num: '' }
    });
  }

  cancelForm = () => {
    console.log('cancel form')
    this.setState({
      id:this.props.ids.length , name: '', gender: '', email: '', contact: { cc: 91, num: '' }
    });
  }


  handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    if (name === "num") this.setState({ contact:{cc: 91 , num: value} })//this.state.contact.num = value
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id: this.state.id,
      name: this.state.name,
      gender: this.state.gender,
      email: this.state.email,
      contact: { cc: 91, num: this.state.contact.num }
    };
    this.props.addFormData(formData)
  }
  
  render() {
    // const {id,name,gender,email,contact,handleInputChange} = this.props;
    // const {name,gender,email,contact} = newUserData;
    return (
      <>
        <div className="container my-2 p-2" style={{ backgroundColor: 'lightblue' }}>
          Add-User
          <Form className=" border border-primary p-2"  /*onSubmit={this.submitForm}*/>
            <label className="mb-1 p-2">
              Name:
              <input type="text" name='name' value={this.state.name}
                onChange={this.handleInputChange} required
              />
            </label> <br />

            <label className="mb-1 p-2" >
              Gender:
              <input className="ms-2" type="radio" name='gender' value='m'
                checked={this.state.gender === 'm'} onChange={this.handleInputChange}
              /> Male

              <input className="ms-2" type="radio" name='gender' value='f'
                checked={this.state.gender === 'f'} onChange={this.handleInputChange}
              /> Female


            </label> <br />

            <label className="mb-1 p-2">
              E-mail:
              <input type="email" name='email' value={this.state.email}
                onChange={this.handleInputChange} required
              />
            </label> <br />

            <label className="mb-1 p-2">
              Contact:
              <input type="Number" name='cc' value={this.state.contact.cc}
                 style={{ width: 40, height: 30, marginRight: 2 }} disabled
              />
              No:
              <input type="number" name='num' value={this.state.contact.num}
                onChange={this.handleInputChange} required
              />
            </label> <br />

            <label className="mb-1 p-2">
              UserId:
              <input disabled type="Number" placeholder='Disabled' value={this.state.id}
                onChange={this.generateId}
              />
            </label>

            <button type="button" onClick={this.generateId} className='mx-2'>
              Generate-Id
            </button> <br />
          </Form>

          <footer className="m-2 ">
            <button type="submit" onClick={this.handleSubmit} >
              <Link to='/userRecords' style={{ textDecoration: 'none', color: 'black' }}>
                Submit
              </Link>
            </button>

            <button type="cancel" onClick={this.cancelForm} >
              <Link to='/userRecords' style={{ textDecoration: 'none', color: 'black' }}>
                Cancel
              </Link>
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