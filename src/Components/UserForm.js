import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { func } from "prop-types";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      gender: "",
      email: "",
      contact: { cc: 91, num: "" },
      formErrors: {} ,formIsValid:true
    };
    this.initialState = this.state;   
  }
  
  handleFormValidation() {  
    const { name, email,contact ,formIsValid } = this.state;
    const { num } = contact;    
    let formErrors = {};    
    let formValid = formIsValid ; 

    // name     
    if (!name) {    
        formValid = false;    
        formErrors["nameErr"] = "Name is required.";    
    }    

    //Email    
    if (!email) {    
        formValid = false;    
        formErrors["emailErr"] = "Email id is required.";    
    }    
    else if ( !(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) ) {   
        formValid = false;    
        formErrors["emailErr"] = "Invalid email id.";    
    }      

    //Phone number    
    if (!num) {    
        formValid = false;    
        formErrors["numErr"] = "Phone number is required.";    
    }    
    else {    
        var mobPattern = /^(\+\d{1,3}[- ]?)?\d{9}$/;    
        if (!mobPattern.test(num)) {    
            formValid = false;    
            formErrors["numErr"] = "Invalid phone number.";    
        }    
    }   
    this.setState({ formErrors: formErrors ,formIsValid:formValid});    
    return formIsValid;   
  
} 
  // componentWillUnmount() {
  //   alert("leaving the form page!");
  // }

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
    if (this.props.isAdd === true) {
      this.setState({ id: Number(this.props.data.length) });
    } else {
      document.getElementById("generate").disabled = true;
      const userid = Number(window.location.pathname.split("/")[2].slice(-1));
      this.setState({ id: userid });

      const userEdit = this.props.data.find( (user) => user.id === userid  );
      this.setState({
        id: userid,
        name: userEdit.name,
        gender: userEdit.gender,
        email: userEdit.email,
        contact: { cc: userEdit.contact.cc, num: userEdit.contact.num },
      });
    }
  }

  generateId = () => {
    this.setState({ id: Number(this.state.id + 1) });
    console.log("prev-id: ", this.state.id);
    document.getElementById("generate").disabled = true;
  };

  resetForm = () => {
    console.log("reset form");
    this.setState({
      id: this.props.data.length,
      name: "",
      gender: "",
      email: "",
      contact: { cc: 91, num: "" },
    });
    document.getElementById("generate").disabled = false;
  };

  cancelForm = () => {
    console.log("cancel form");
    this.setState({
      id: this.props.data.length,
      name: "",
      gender: "",
      email: "",
      contact: { cc: 91, num: "" },
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    if (name === "num") this.setState({ contact: { cc: 91, num: value } }); //this.state.contact.num = value
    this.setState({ [name]: value });
    
    this.handleFormValidation(this.state);
  };

  handleSubmit = (event) => {    
    const { id, name, gender, email, contact, formIsValid } = this.state;
    const { num } = contact;

    event.preventDefault();
    const formData = {
      id: id,
      name: name,
      gender: gender,
      email: email,
      contact: { cc: 91, num: num },
    };
    this.props.addFormData(formData);

    if (formIsValid ) {
     alert ("You have been successfully registered.")
    }
    else{
      console.error('fill the form');
    }
    
    this.setState(this.initialState);
  };

  changeUserData = () => {
    const editData = [{ ...this.state }];
    this.props.editUserData(editData);
  };

  render() {
    const { id, name, gender, email, contact } = this.state;
    const { cc, num } = contact;
    
    const { nameErr, emailErr, numErr } = this.state.formErrors; 

    return (
      <div
        className="container my-2 p-2 bg-dark text-light"
      >
        { <div
            className="container my-2 p-2 border border-light shadow"
            style={{textAlign:'center' }}
          >   
            { this.props.isAdd ? 
                ( <h3> Add-User: </h3> ) : ( <h3> Edit-User: </h3> )
            }
            <i> ! Id - { id } </i>
          </div>        
        }

        <Form className=" border  p-2" >
          <label className="mb-1 p-2">
            Name:
          </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              required
              className={nameErr ? ' showError' : ''} 
            /> 
            { nameErr && 
              <div style = {{ color: "red", paddingBottom: 10 }} >
                {nameErr}
              </div>
            }  
          {" "}

          <br />
          <label className="mb-1 p-2">
            Gender:
          </label>
            <input
              required
              className="ms-2"
              type="radio"
              name="gender"
              value="m"
              checked={gender === "m"}
              onChange={this.handleInputChange}
            />{" "}
            Male

            <input
              required
              className="ms-2"
              type="radio"
              name="gender"
              value="f"
              checked={gender === "f"}
              onChange={this.handleInputChange}
            />{" "}
            Female
          {" "}
          <br />

          <label className="mb-1 p-2">
            E-mail:
          </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
              className={emailErr ? ' showError' : ''}
            />
            { emailErr &&    
              <div style={{ color: "red", paddingBottom: 10 }}>
                {emailErr}
              </div>
            }    
         {" "}

          <br />
          <label className="mb-1 p-2">
            Number:
          </label>
            <input
              type="Number"
              name="cc"
              value={cc}
              style={{ width: 40, height: 30, marginRight: 2 }}
              disabled
            />

            -
            <input
              type="number"
              name="num"
              value={num}
              onChange={this.handleInputChange}
              required
              className={numErr ? ' showError' : ''}
            />
            { numErr &&    
              <div style={{ color: "red", paddingBottom: 10 }}>
                {numErr}
              </div>    
            }    
          {" "}

          <br />
          <label className="mb-1 p-2">
            User-Id:
          </label>
            <input
              disabled
              type="Number"
              placeholder="Disabled"
              value={ id }
              onChange={this.generateId}
            />
          
          <button
            required
            id="generate"
            type="button"
            onClick={this.generateId}
            className="mx-2 btn btn-warning"
          >
            Generate-Id
          </button>{" "}
          <br />

        </Form>

        <footer className="container p-2 ">
          {this.props.isAdd ? (
            <>
              <button
                className="ms p-1 btn btn-success"
                type="submit"
                onClick={this.handleSubmit}
              >
                <Link to='/' style={{ textDecoration: "none", color: "black" }}>
                  Submit
                </Link>
              </button>

              <button
                className="ms-2 p-1 btn btn-info"
                type="reset"
                onClick={this.resetForm}
              >
                {" "}
                Reset{" "}
              </button>
            </>
          ) : (
            <button
              className="ms-auto p-1 btn btn-success"
              onClick={this.changeUserData}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Save
              </Link>
            </button>
          )}

          <button
            className="ms-2 p-1 btn btn-danger"
            type="cancel"
            onClick={this.cancelForm}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Cancel
            </Link>
          </button>
        </footer>
      </div>
    );
  }
}

export default UserForm;

UserForm.propTypes = {
  handleInputChange: func.isRequired,
};
