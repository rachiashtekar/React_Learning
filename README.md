# when we use form tag the form will refresh after click the button 

# when we use any eventhandler on button then it will not refresh the page 
# 1. we can use the preventDefault for this will not refresh the page.

# 2. In form tag we will use the type- submit and the it will submit the form thats it  

<!-- --------------------------------------------How to make form----------------------------------------------------->

# steps to create form

# 1: first of all create one components and create input tag for taking input the input from user

# 2:then write one function for button where we will use the prevenDefault function for submitting the form it will not refresh the value like form tag.

 ex:- const handleSubmit=(e)=>{
    e.preventDefault()

    // and now we can do console.log we can we the form is submitted or not
    console.log("submitted)

 }

 and the use this handlesubmit to the button tag <button onclick={hand}>Register</button>

 # 3: After this we have to import the usestate usestate updates the value that we enter in the input field  

 import {useState} from "react"

 const [formvalue,setformvalue]= useState({
    name:""        // here we are giving the value is empty
 })

# 4: After importing the usestate we have use this the setformvalue in our inputfield 
 for this we have to create one function

 ex:- const handlevent=()=>{
    setformvalue((prevformvalue)=>(...prevform,[e.target.name]:e.target.value))    it will change the value
 }
  from here above we have use value and name
 <input type="text", placeholder="name" name="name" value={formvalue.name}/>  

 <---------------------------------------------error handling------------------------------------------------------------->

 #  1: we have to import another hook for error handling 

 ex:- const [erros,seterros]= useState({name:" "})   // set here the initial  value is null

 # 2: we have to write the condition in the function which function handle the button 

 const handleclickhere =(e)=>{
   e.preventDefault()
   console.log("submitted")
   console.log("name",formvalue.name)
   
    if (!formvalue.name) {
      seterrors({ name: "Please enter the name" });
      return;
    }

    if (formvalue.name.length < 5) {
      seterrors({ name: "Name should be more than 5 characters" });
      return;
    }          // ok so here we set the error if this condition is true it will show the error

 } 

 # 4: And now we have this error hook in input section below the name input section we have to use this

       <p style={{ color: "red", fontSize: "10px" }}>{errors.name}</p>   // we will use this for all the section 

# 5: so now at the time of submitting the form when we did the mistaken while submittign the form it will show error like above and we fill correct input the error will not remove so for this we have to use this 

const handleEvent = (e) => {
    // Clear the error for the specific field when typing
    seterrors({ ...errors, name: "" });

    setformvalue((prevformvalue) => ({ ...prevformvalue, name: e.target.value }));
  };

<!-- -------------------------------------------------------------------------------------------------------------- -->





 