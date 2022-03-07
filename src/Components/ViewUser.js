import React from "react";
import { Card } from "react-bootstrap";

class ViewUser extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id:''
    };  

  }
  
  componentDidMount()  {     
     const pathId = Number( window.location.pathname.split('/')[2].slice(-1) )
     this.setState( { id: pathId } )
  }

  componentWillUnmount() {
    alert('leaving the viewuser page!')
  }

  render() {
    const userData = this.props.data.filter( (items,index) => items.id === this.state.id );
        
    return (
        <div className = "card my-2 bg-danger" >
          <Card className = 'border-danger ' style = { { width: 'auto', height: 'auto' } } >
            <Card.Body>
              <Card.Title style = { { textAlign: 'center' } } > 
                <u> User Records </u>
              </Card.Title>
              <Card.Text>
                { userData.map( (item,index) => (
                    
                    <ul key = { index } 
                        className = 'border border-primary' 
                        style = { { listStyleType:'none' } } 
                    >
                       <li> Id: { item.id } </li>
                       <li> Name: { item.name } </li>
                       <li> Gender: { item.gender } </li>
                       <li> E-mail: { item.email } </li>
                       <li> Contact: { item.contact.cc } - { item.contact.num } </li>
                    </ul>
                      
                )) }                   
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    );
  }
  
}

export default ViewUser;