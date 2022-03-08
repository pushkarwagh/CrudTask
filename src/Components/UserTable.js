import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { GrEdit, GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrEdit: true 
    }
    /*this.handleData= this.handleData.bind(this); */

  }
  /* handleData=(item)=>{
    this.history.push(`/userCard/:${item}`) 
  } */

  // componentWillUnmount() {
  //   alert("leaving the table page!");
  // }

  deleteData = (id) => {
    // console.log(id)
    this.props.deleteUserData(id);
    //  this.setState((element) => {
    //   return element.filter((user) => user.id !== element.id)
    // });
  };

  addOrEdit = (change) => {
    this.props.isChange(change);
  }

  render() {
    return (
       <div className = "container my-2" >
          <Table striped bordered hover variant = "light" >
            <thead>
              <tr>
                <th colSpan = { 6 } style = { { textAlign: "center" } } >
                  {" "}
                  <h2> User-Records </h2>{" "}
                </th>

                <th colSpan={2}>
                  <Link to = "/userForm" >
                    {" "}
                    <button type = "button" onClick = { () => this.addOrEdit(true) } > Add-User </button>{" "}
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th> id </th>
                <th> Name </th>
                <th> Gender </th>
                <th> E-mail </th>
                <th> Contact: </th>
                <th colSpan = { 3 } style = { { textAlign: "center" } } >
                  {" "}
                  Action
                </th>
              </tr>

              { this.props.userRecord.map((element, index) => (
                <tr key = { index } >
                  <td> { element.id } </td>
                  <td> { element.name } </td>
                  <td> { element.gender } </td>
                  <td> { element.email } </td>
                  <td>
                    {" "}
                    { element.contact.cc } - { element.contact.num }
                  </td>

                  <td>
                    <Link
                      to = { {
                        pathname: `/viewUser/${ element.id }`,
                        state: { data: element },
                      } }
                    >
                      <GrView />
                    </Link>
                  </td>

                  <td>
                    <Link to = { { pathname: `/userForm/${ element.id }` } } >
                      <GrEdit onClick = { () => this.addOrEdit(false) }/>
                    </Link>
                  </td>

                  <td>
                    <button onClick = { () => this.deleteData(element.id) } >
                      {" "}
                      <MdDelete />{" "}
                    </button>
                  </td>
                </tr>
              )) }
            </tbody>
          </Table>
        </div>
    );
  }
}

export default UserTable;
