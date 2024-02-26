import { useRef } from "react"
function  UnControlled2(){
    let fnameRef = useRef(null)
    let lnameRef = useRef(null)
     
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit handler')
        console.log(fnameRef.current.value)
        console.log(lnameRef.current.value)
    }

    return (
        <>
          <h1>Hi welcome to my form</h1>
          <form  onSubmit={submitHandler}>
          <label htmlFor="fname">fName:</label>
            <input id="fname" type="text" placeholder="fname" ref={fnameRef}/>
            <br/>
            <br/>
            <label htmlFor="lname">lname:</label>
            <input id="lname" type="text" placeholder="lname" ref={lnameRef} />
            <br/>
            <br/>
            <button type="submit">Submit</button>
          </form>
        
        
        </>

    )
}
export default UnControlled2