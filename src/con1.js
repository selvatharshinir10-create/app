const Firstcom=()=>
    {
     return(
    <div>
    <h1>This is my First Component</h1>
    </div>
     )
    }
const Secondcom=()=>
    {
     return(
    <div>
    <Firstcom></Firstcom>
    <h1>This is my Second Component</h1>
     </div>
    )
    }
    export default Secondcom;
    