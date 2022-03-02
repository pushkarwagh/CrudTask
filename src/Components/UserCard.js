import React from "react";
import { Card } from "react-bootstrap";

class UserCard extends React.Component {
  constructor(props){
    super(props);
  //  console.log(this.props.location.data);
  };

  render() {
     const {data} = this.location;
    // const {id} = this.props.match.params
     //const element = this.props.location;
     console.log("this is props",this.props); 
     console.log("this is element" ,data );
      
    return (
      <>
        <div className="card my-2 bg-danger">
          <Card className='border-danger ' style={{ width: 'auto', height: 'auto' }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}> <u>User Records</u></Card.Title>
              <Card.Text>
                
                 ------ Shows User Data-----
                
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </>
    );
  }
  
}

export default UserCard;