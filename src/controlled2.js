import { useState } from "react"

function Controlled2(){
      const [values, setvalues] = useState({
        fname:'',
        lname:''
      })

      const ChangeHandler = (e) => {
        let {name, values}= e.target

        setvalues({...values,[name]:e.target.values})
      }

    return (
        <>
          <h1>Hi welcome to my form</h1>
          <form>
          <label htmlFor="fname">fName:</label>
            <input id="fname" type="text" name="fname" value={values.fname}  placeholder="fname" onChange={ChangeHandler}/>
            <br/>
            <br/>
            <label htmlFor="lname">lname:</label>
            <input id="lname" type="text" name="lname" value={values.lname} placeholder="lname" onChange={ChangeHandler} />
            <br/>
            <br/>
            <button type="submit">Submit</button>
          </form>
        
        
        </>

    )
}
export default Controlled2