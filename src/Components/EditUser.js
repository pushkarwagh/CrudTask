import React from "react";
import { Link } from "react-router-dom";

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Number(window.location.pathname.split('/')[2].slice(-1)),
      name: 'name' ,
      gender: 'gender',
      email: 'email',
      contact: { cc: 91 , num: 'num' }
    };

  }

  componentDidMount() {
    this.props.data.filter( (items, index) => 
    (items.id === this.state.id) ).map(item => this.setState(item))  ;
    
  }


  handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    if (name === "num") this.setState({ contact: { cc: 91 , num: value } })
    this.setState({ [name]: value });
    
  }

  changeUserData = ()=>{
    const editData = [{ ...this.state }]
    this.props.editUserData(editData)
  }


  render() {
    return (
      <>
        <div className="card my-2 border-danger">

          <h4 style={{ textAlign: 'center' }}>
            <u> Edit-User Records</u>
          </h4>

          <div className="container">
           
               <div className="m-1 p-1">
                Id:
                <input disabled type='number' value={this.state.id} 
                    style={{ width: 30, height: 30 }}
                /> <br/>
                </div>
               
                <div className="m-1 p-1">
                Name:
                <input required type="text" name='name'
                       value={this.state.name} placeholder='enter Name'
                       onChange={this.handleInputChange} 
                />
                </div>
                
                <div className="m-1 p-1">
                Gender:
                <input required type='text' value={this.state.gender} name='gender'
                       placeholder='enter gender:(m/f)'
                       onChange={this.handleInputChange} 
                />
                </div>

                <div className="m-1 p-1">
                E-mail:
                <input required type='email' value={this.state.email} placeholder='enter email'
                  onChange={this.handleInputChange} name='email'
                />
                </div>
                
                <div className="m-1 p-1">
                Contact:
                <input disabled type='number' value={this.state.contact.cc}  
                  
                      style={{ width: 40, height: 30 }} 
                />

                Number:
                <input required type='number' value={this.state.contact.num}
                  placeholder='enter contact-Number' name='num'
                  onChange={this.handleInputChange}
                />
                </div>
           

          </div>
          
          <footer className="my-1 p-1">

             <button onClick={this.changeUserData}> 
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> 
                   Done 
                </Link>
             </button>  
            
          </footer>

        </div>
      </>
    );
  }

}

export default EditUser;







