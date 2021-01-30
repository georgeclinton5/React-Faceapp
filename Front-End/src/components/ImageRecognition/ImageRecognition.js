import React from 'react';
import './ImageRecognition.css';


const ImageRecognition = ({imageUrl, box}) => {
	return(
	<div className='center ma'>
       <div className= 'absolute mt mb4'>
           <img id='imageLink' alt='' src={imageUrl} width='400px' height='auto' />
           <div className='bounding-box' style={{top:box.topRow, left:box.leftCol, bottom:box.bottomRow, right:box.rightCol}}></div>
       </div>
    </div>
    );
}

export default ImageRecognition; 