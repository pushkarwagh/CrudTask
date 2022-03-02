import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Header from "./Header";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import UserCard from "./UserCard";


class Task3Router extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
        
          <Nav style={{ backgroundColor: 'yellowgreen' }}> 
              <li>
                <Link to='/userRecords' style={{ textDecoration: 'none', margin: '2px' }} >
                  Tab-1
                </Link>
              </li>

            <li> <Link to='/' style={{ textDecoration: 'none', margin: '2px' }}> Home </Link> </li>            
          </Nav>

          <div className='container p-2 bg-light' >
            <Routes>
              <Route path='/userRecords' element={<UserTable userRecord={this.userRecord} />} />
              <Route path='/' element={<Header />} />
              <Route path="/userForm" element={<UserForm />} />
              <Route path="/userCard/:id" element={<UserCard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default Task3Router; 