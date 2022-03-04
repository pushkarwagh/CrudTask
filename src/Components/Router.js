import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Header from "./Header";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";

class Task3Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userRecord: [
        { id: 1, name: 'rakesh', gender: 'm', email: 'abx@gh.com', contact: {cc:91 , num:452136} },
        { id: 2, name: 'ramesh', gender: 'm', email: 'fg@gh.com', contact: {cc:91 , num:658136} },
        { id: 3, name: 'Riya', gender: 'f', email: 'ncn@gh.com', contact: {cc:91 , num:235136} },
        { id: 4, name: 'Mansi', gender: 'f', email: 'zdfghb@gh.com', contact: {cc:91 , num:451136} }
      ],
    };     
    // this.handleInputChange = this.handleInputChange.bind(this);  
      
  }
  
  handleInputChange = (event) =>{
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });   
  }

  addFormData = (formData) =>{
    const userRef = this.state.userRecord;
    userRef.push(formData);
    this.setState({userRecord: userRef})
  }

  deleteUserData = (id) => {
    console.log("to-delete-id" , id)   
    const deleteRef = this.state.userRecord.filter( userRecord => userRecord.id !== id ) 
    console.log(deleteRef)  
    // userRef.pop(index);
    this.setState( {userRecord: deleteRef} ) 
  }

  editUserData = (editData) => {
    const editRef = Object.assign(...this.state.userRecord, ...editData)
    console.log("edited-user" , editRef)
  }

  // submitForm = (event) =>{
  //     event.preventDefault();
  //     const newUserData = {
  //       name:this.handleInput.name ,
  //       email: this.handleInput.email ,
  //       gender:this.handleInput.gender ,
  //       contact:this.handleInput.contact 
  //     };
  
  //     const newUserdata = [...this.props.state , this.state]
  //     this.props.setState(newUserdata);
  //   }

  render() {
     console.log("main state",this.state.userRecord)

    return (
      <>
        <BrowserRouter>
          <Header />

          <div className='container p-2 bg-light' >            
            <Routes>
              <Route path='/userRecords' 
                     element={
                       <UserTable userRecord={this.state.userRecord}
                         deleteUserData={this.deleteUserData}
                       /> 
                     } 
              />
              
              <Route path="/userForm" 
                    element={
                      <UserForm ids={this.state.userRecord} addFormData={this.addFormData}  
                                handleInputChange={this.handleInputChange}/>
                    } 
              />

              <Route path="/viewUser/:id" 
                     element={ 
                      <ViewUser data={this.state.userRecord}/> 
                      } 
              />

              <Route path="/editUser/:id" 
                     element={ 
                      <EditUser data={this.state.userRecord}
                       handleInputChange={this.handleInputChange} 
                       editUserData={this.editUserData}  
                      /> 
                    } 
              />

            </Routes>
          </div>

        </BrowserRouter>
      </>
    );
  }

}

export default Task3Router; 