import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Header from "./Header";
import ViewUser from "./ViewUser";
// import EditUser from "./EditUser";
// import AddOrEdit from "./AddOrEdit";

class Task3Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: true,
      userRecord: [
        {
          id: 1,
          name: "rakesh",
          gender: "m",
          email: "abx@gh.com",
          contact: { cc: 91, num: 452136 },
        },
        {
          id: 2,
          name: "ramesh",
          gender: "m",
          email: "fg@gh.com",
          contact: { cc: 91, num: 658136 },
        },
        {
          id: 3,
          name: "Riya",
          gender: "f",
          email: "ncn@gh.com",
          contact: { cc: 91, num: 235136 },
        },
        {
          id: 4,
          name: "Mansi",
          gender: "f",
          email: "zdfghb@gh.com",
          contact: { cc: 91, num: 451136 },
        },
      ],
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  addFormData = (formData) => {
    const userRef = [...this.state.userRecord];
    userRef.push(formData);
    this.setState({ userRecord: userRef });
  };

  deleteUserData = (id) => {
    // console.log("to-delete-id", id);
    // const deleteRef = this.state.userRecord.filter(userRecord => userRecord.id !== id);
    // console.log(deleteRef);
    // this.setState({ userRecord: deleteRef });

    const deleteRef = [...this.state.userRecord];
    const deleteIndex = deleteRef.findIndex((user) => user.id === id);
    deleteRef.splice(deleteIndex, 1);
    this.setState({ userRecord: deleteRef });
  };

  editUserData = (editData) => {
    const newData = [];
    this.state.userRecord.map((user) =>
      user.id === editData[0].id
        ? newData.push(editData[0])
        : newData.push(user)
    );
    console.log("edit",editData[0]);
    this.setState({ userRecord: newData });
  };

  isChange = (change) => {
    this.setState({ isAdd: change });
  };

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
    console.log("main state", this.state.userRecord);
    
    return (
      <BrowserRouter>
        <Header />

        <div className="container p-2 bg-light">
          <Routes>
            <Route
              path="/"
              element={
                <UserTable
                  userRecord={this.state.userRecord}
                  deleteUserData={this.deleteUserData}
                  isChange={this.isChange}
                />
              }
            />

            <Route
              path="/userForm"
              element={
                <UserForm
                  data={this.state.userRecord}
                  addFormData={this.addFormData}
                  handleInputChange={this.handleInputChange}
                  editUserData={this.editUserData}
                  isAdd={this.state.isAdd}
                />
              }
            />

            <Route
              path="/viewUser/:id"
              element={<ViewUser data={this.state.userRecord} />}
            />

            <Route
              path="/userForm/:id"
              element={
                <UserForm
                  data={this.state.userRecord}
                  handleInputChange={this.handleInputChange}
                  editUserData={this.editUserData}
                  isAdd={this.isAdd}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Task3Router;
