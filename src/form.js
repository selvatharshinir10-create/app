import { useState } from "react";
function ReactForm() {
 const [name, setName] = useState(""); // Name Store
const handleSubmit = (e) => {
 e.preventDefault(); // Prevents page refresh
 alert(`Name: ${name}`); // Shows alert
};
return (
 <form onSubmit={handleSubmit}>
 <label>Enter Name:</label>
 <input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
  />
  <button type="submit">Submit</button>
 </form>
 );
}
export default ReactForm;
