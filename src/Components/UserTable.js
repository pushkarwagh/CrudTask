import React from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { GrEdit, GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

class UserTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userRecord: [
        { id: 1, name: 'rakesh', gender: 'm', email: 'abx@gh.com', contact: 452136 },
        { id: 2, name: 'ramesh', gender: 'm', email: 'fg@gh.com', contact: 658136 },
        { id: 3, name: 'Riya', gender: 'f', email: 'ncn@gh.com', contact: 235136 },
        { id: 4, name: 'Mansi', gender: 'f', email: 'zdfghb@gh.com', contact: 451136 }
      ],
    };
    /*this.handleData= this.handleData.bind(this); */

  }
  /* handleData=(item)=>{
    this.history.push(`/userCard/:${item}`) 
  } */


  deleteData = (element) => {
    this.setState((prev) => {
      return prev.filter((user) => user.id !== element.id)
    });

  }

  render() {

    return (
      <>
        <div className="container my-2">

          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th colSpan={6} style={{ textAlign: "center" }}> <h2> User-Records </h2> </th>

                <th colSpan={2}>
                  <Link to='/userForm'> <button type="button"> Add-User </button>  </Link>
                </th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <th> id </th>
                <th> Name </th>
                <th> Gender </th>
                <th> E-mail </th>
                <th> Contact</th>
                <th colSpan={3} style={{ textAlign: "center" }}> Action</th>
              </tr>

              {this.state.userRecord.map((element, index) => (

                <tr key={index}>
                  <td> {element.id} </td>
                  <td> {element.name} </td>
                  <td> {element.gender} </td>
                  <td> {element.email} </td>
                  <td> {element.contact} </td>

                  <td>
                  <Link to={{ pathname : `/userCard/${element.id}`, state:{data: element}  }}>  <GrView /> </Link>
                     
                  </td>
                  <td>  <GrEdit /> </td>
                  <td>  <MdDelete onClick={(element) => this.deleteData(element)} /> </td>

                </tr>
              ))}

            </tbody>

          </Table>
        </div>
      </>
    );
  }
}

export default UserTable;