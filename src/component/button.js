import React from 'react';
const Button = ({label,handleModalOpen}) => {
 
    return ( 
        <button onClick={handleModalOpen} className="btn btn-primary">
        {label}
      </button>
     );
}
export default Button;
