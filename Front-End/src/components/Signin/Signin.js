import React from 'react';
import './Signin.css';


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: ''
        }
    }

        onEmailChange = (event) => {
            this.setState({ signinEmail: event.target.value });
        }

        onPasswordChange =(event) => {
            this.setState({ signinPassword: event.target.value });
        }

        onSigninSubmit = () => {
            fetch('http://localhost:3000/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.signinEmail,
                    password: this.state.signinPassword
                })
            }).then(res => res.json())
            .then(user => {
                if (user.id) {
                  this.props.loadUser(user)
                  this.props.onRouteChange('home');
                  console.log(user.id);
                }
         })        
        }
    

    render() {
                const { onRouteChange } = this.props;
    return(
       <div>
        <p className=' title f2 pa1 fw6 '>
            {'This Magic App will detect your Face'}
        </p>
            <div className='box'>
            <form className='box1 pa3 shadow-2'>
                 <input onChange={this.onEmailChange} className='signinBox grow' type='email' id='email' placeholder='Email' />
                 <input onChange={this.onPasswordChange} className='signinBox grow' type='Password' id='password' placeholder='Password' />
                 <div>
                     <button onClick={ this.onSigninSubmit } type='button' className='signinbtn grow' > Sign In </button>
                 </div>
                <div><p onClick={ () => onRouteChange('register') } type='button' className='pointer f3' > Register </p></div>
            </form>
            </div> 
       </div>    
    );
 }
}


export default Signin;   