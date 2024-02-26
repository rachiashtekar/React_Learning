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

 //---------------------------------------------error handling--------------------------------------------------



 