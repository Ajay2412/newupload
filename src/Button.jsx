import React from "react";

function Button(props){
    const handleclick = props.onInc;
console.log("done");
return(
  <button className='btn btn-info' onClick={handleclick}>+1</button>
);

}
export default Button;