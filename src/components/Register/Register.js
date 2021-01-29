import React from 'react';

class Register extends React.Component {
    constructor() {
      super();
      this.state = {
          email: '',
          password: '',
          name: ''
      }
    } 
    
    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onSubmitSignin = () => {
        fetch( 'http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            })
        })
        .then(response => response.json())
        .then( user => {
              if (user.id) {
               this.props.loadUser(user)
               this.props.onRouteChange('home'); 
               console.log(user);
             } 
         })             

    }

    render() {
        //const { onRouteChange } = this.props;
        return(
            <div>
             <p className='title f2 pa1 fw6 '>
                 {'This Magic App will detect your Face'}
             </p>
                 <div className='box'>
                 <form className='box1 pa2 shadow-2'>   
                      <h3 className='center  f3 yellow system sans-serif'> Register </h3>
                      <input className='signinBox grow' type='text' placeholder='Name' onChange= {this.onNameChange} />
                      <input className='signinBox grow' type='email' placeholder='Email' onChange= {this.onEmailChange} />
                      <input className='signinBox grow' type='Password' placeholder='Password' onChange= {this.onPasswordChange} />
                      <div><button onClick= { this.onSubmitSignin } type='button' className='signinbtn grow' > Register </button></div>
                 </form>
                 </div> 
            </div>    
         );
    }	
}

export default Register;   