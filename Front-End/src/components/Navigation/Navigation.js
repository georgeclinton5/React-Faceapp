import React from 'react';
import 'tachyons';
import './Navigation.css';


const Navigation = ({onRouteChange, isSignedIn}) => { 
	if (isSignedIn) {
		return(
           <nav className='Navibar' >
                <p onClick={ () => onRouteChange('signout') } className='Navibtn f3 link dim black no-underline pointer grow'> SignOut </p>
           </nav>	
		);
	} else{
		return(
		    <nav className='Navibar' >
                <p onClick={ () => onRouteChange('signin') } className='Navibtn f3 link dim black no-underline pointer grow'> SignIn </p>
                <p onClick={ () => onRouteChange('register') } className='Navibtn f3 link dim black no-underline pointer grow'> Register </p> 
            </nav>	
          
		);
	}
}

export default Navigation;  