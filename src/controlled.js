import { useState } from "react";

function Controlled () {

    const [fname, setfname]= useState('')
    const [lname, setlname]= useState('')

    const handleevent = (event)=>{
        event.preventDefault()
        console.log('fname',fname)
        console.log('lname',lname)
    }

    const eventchange = (event) =>{
        setfname(event.target.value)
       
    }
    const eventchange1 = (event) =>{
        setlname(event.target.value)
       
    }
   
    return (
        <>
        <h1>Hi welcome to my form</h1>
        <form onSubmit={handleevent}>
            <label htmlFor="fname">fName:</label>
            <input id="fname" type="text" value={fname} onChange={eventchange}/>
            <br/>
            <br/>
            <label htmlFor="lname">lname:</label>
            <input id="lname" type="text" value={lname} onChange={eventchange1}/>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )


}

export default Controlled;