import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain.png';

const Logo = () => {
	return (
       <div style={{display:'flex', justifyContent:'center'}}>
          <Tilt className="Tilt br4 shadow-2" options={{ 
          	reverse: false, max : 60}} style={{ height: 170, width: 170 }} >
              <div className="Tilt-inner">
              <img src={Brain} alt='pic'/>
              </div>
          </Tilt>
       </div>
	);
}

export default Logo;