import { useState } from "react";

function EnqueryForm() {
  const [formvalue, setformvalue] = useState({
    name: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(formvalue.name);
  };

  const handleEvent = (e) => {
    setformvalue((preformvalue) => ({
      ...preformvalue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="enquery-form">
      <input
        type="text "
        placeholder="name"
        className="form"
        name="name"
        onChange={handleEvent}
        value={formvalue.name}
      />

      <br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default EnqueryForm;
