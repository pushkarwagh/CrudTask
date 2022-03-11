import React from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

import { GrEdit, GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrEdit: true,
      posts: [],
    };
    /*this.handleData= this.handleData.bind(this); */
  }
  /* handleData=(item)=>{
    this.history.push(`/userCard/:${item}`) 
  } */

  // componentWillUnmount() {
  //   alert("leaving the table page!");
  // }

  componentDidMount = () => {
    axios.get('https://api.stackexchange.com/2.3/posts?order=desc&sort=activity&site=stackoverflow')
      .then((response) => {
        if (response && response.data) {
          const postsData = response.data.items;
          this.setState({ posts: postsData })
        }
      })
  }

  deleteData = (id) => {
    // console.log(id)
    this.props.deleteUserData(id);
    //  this.setState((element) => {
    //   return element.filter((user) => user.id !== element.id)
    // });
  };

  // addOrEdit = (change) => {
  //   this.props.isChange(change);
  // }

  render() {
    const { isChange } = this.props;
    console.log('posts---', this.state.posts)

    return (
      <div className="container my-2">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th colSpan={6} style={{ textAlign: "center" }}>
                {" "}
                <h2> User-Records </h2>{" "}
              </th>

              <th colSpan={2} >
                <Link to="/userForm">
                  {" "}
                  <button
                    className="btn btn-dark"
                    onClick={() => isChange(true)}
                  >
                    Add-User
                  </button>{" "}
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
              <th colSpan={3} style={{ textAlign: "center" }}>
                {" "}
                Action
              </th>
            </tr>

            { this.props.userRecord.map((element, index) => (
              <tr key={index}>
                <td> {element.id} </td>
                <td> {element.name} </td>
                <td> {element.gender} </td>
                <td> {element.email} </td>
                <td>
                  {" "}
                  {element.contact.cc} - {element.contact.num}
                </td>

                <td>
                  <Link
                    to={{
                      pathname: `/viewUser/${element.id}`,
                      state: { data: element },
                    }}
                  >
                    <GrView />
                  </Link>
                </td>

                <td>
                  <Link to={{ pathname: `/userForm/${element.id}` }}>
                    <GrEdit onClick = { () => isChange(false) } />
                  </Link>
                </td>

                <td>
                  <MdDelete onClick = { () => this.deleteData(element.id) } />
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
