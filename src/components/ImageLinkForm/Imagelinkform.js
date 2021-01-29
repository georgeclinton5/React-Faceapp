import React from 'react';
import './Imagelinkform.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
       <div>
            <p className='title f2 pa1 fw6 '> {'This Magic App will detect your Face'} </p>
          <div className='box'>
              <div className='box pa3 shadow-2  '>
                 <input className='urltextBox grow' type='text' placeholder='Picture' onChange={onInputChange} />
                 <button className='urlButton grow' onClick={onButtonSubmit} > Detect </button>
              </div>
            </div>  
          <p className='f4 black fw6 '> {'Copy and paste the image link'} </p>
       </div>    
    );
}

export default ImageLinkForm; 