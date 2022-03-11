import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

class ViewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      gender: "",
      email: "",
      contact: { cc: "", num: "" },
    };
  }

  componentDidMount() {
    const pathId = Number(window.location.pathname.split("/")[2].slice(-1));
    const userData = this.props.data.find((items) => items.id === pathId);
    this.setState({
      id: pathId,
      name: userData.name,
      gender: userData.gender,
      email: userData.email,
      contact: { cc: userData.contact.cc, num: userData.contact.num },
    });
  }

  componentWillUnmount() {
    alert("leaving the viewuser page!");
  }

  render() {
    const { id, name, gender, email, contact } = this.state;

    return (
      <div className="card my-2 ">
        <Card className="bg-dark p-2 shadow">
          <Card.Body>
            <Card.Title className="text-center text-light border border-light p-2 shadow">
              <h4> User Records </h4>
            </Card.Title>
            <Card.Text className="p-2 text-light">
              <ul
                key={id}
                className="p-2 border"
                style={{ listStyleType: "none" }}
              >
                <li> Id: {id} </li>
                <li> Name: {name} </li>
                <li> Gender: {gender} </li>
                <li> E-mail: {email} </li>
                <li>
                  {" "}
                  Contact: +{contact.cc} - {contact.num}{" "}
                </li>
              </ul>
            </Card.Text>            
          </Card.Body>            
        </Card>
      </div>
    );
  }
}

export default ViewUser;
