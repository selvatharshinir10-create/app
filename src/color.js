import { useState } from "react";
function Favcolor(){
// let color="Blue";
 const[color ,SetColor]=useState("Blue");
return(
 <>
<h1>My fev color is  {color}</h1>
 <button onClick={()=>{SetColor('Red')}}>change color</button>
 </>
)
}
export default Favcolor;

