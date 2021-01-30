import React from 'react';

const Rank = ({name, entries}) => {
	return(
       <div style={{ display:'flex', justifyContent:'center', margin:'5px'}}>
          <div className=' f3 white fw2'>
            {`Hi ${name}, Your Entry Count : `} 
          </div>
          <div className=' f3 yellow fw7'>
           {entries} 
          </div>  
       </div>    
    );
}

export default Rank;