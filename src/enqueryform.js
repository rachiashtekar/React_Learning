
import { useState } from "react";

function EnqueryForm() {
  const [formvalue, setformvalue] = useState({
    name: ""
  });

  const [errors, seterrors] = useState({
    name: null,
  });

  const handleclickhere = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log("name", formvalue.name);

    if (!formvalue.name) {
      seterrors({ name: "Please enter the name" });
      return;
    }

    if (formvalue.name.length < 5) {
      seterrors({ name: "Name should be more than 5 characters" });
      return;
    }

    // Clearing errors when the validation passes
    seterrors({ name: "" });
  };

  const handleEvent = (e) => {
    // Clear the error for the specific field when typing
    seterrors({ ...errors, name: "" });

    setformvalue((prevformvalue) => ({ ...prevformvalue, name: e.target.value }));
  };

  return (
    <div>
      <input type="text" placeholder="name" name="name" value={formvalue.name} onChange={handleEvent} />
      <br />
      <p style={{ color: "red", fontSize: "10px" }}>{errors.name}</p>
      <button onClick={handleclickhere}>Click here</button>
      <br />

    </div>
  );
}

export default EnqueryForm;
