function Com1(val){
    return(
    <>
        
        <h1>hello world!</h1>
        <img src="image.jpg"></img>
        <h1>welcome {val.name} to my {val.page}</h1>
        </>
        
    )
}
const Com2 =()=>{
    return(
    <>
        
        <h1>hello world!</h1>
        <img src="image.jpg"></img> 
        <h1>welcome to site</h1>
        <Com1 name="selva" page="youtube"></Com1>
        </>
        
    )
}
export default Com2
