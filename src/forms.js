import { useState } from "react";

function Forms() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [checked, setchecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault(); // the submit have default behavior when you submit the form it will refresh the page but when you use preventdefault then it will not refresh the page
    if (!name || !email || !checked) {
      setErrorMessage("please enter all fields");
      return;
    }
    if (name.length < 5) {
      setErrorMessage("please enter a name >5 charcters");
      return;
    }
    if (!checked) {
      setErrorMessage("please agree to the T&cs");
      return;
    }
    console.log("submitted the form!");
    console.log("name", name);
    console.log("email", email);
    console.log("agree to t&c ?", checked);
  };
  return (
    <form
      style={{ border: "1px solid black", padding: "5px", marginTop: "20px" }}
      onSubmit={handleSubmitForm}
    >
      <section>
        <label htmlFor="name">Name : </label>
        <br />
        <input
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => {
            setname(e.target.value);  // it will change the value of name
          }}
        />
      </section>
      <br />

      <section>
        <label htmlFor="email">Email : </label>
        <br />
        <input
          id="email"
          type="email"
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </section>
      <br />
      <section>
        <label htmlFor="tnc">Agree to T&C's</label>
        <input
          id="tnc"
          type="checkbox"
          checked={checked}
          onChange={() => {
            setchecked(!checked);
          }}
        />
      </section>
      <br />
      <p style={{ color: "red", fontsize: "10px" }}>{errorMessage}</p>
      <button type="submit">Register</button>
    </form>
  );
}
export default Forms;
