import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onsubmitHandler = async () => {
    const response = await axios.post("http://localhost:5000/register", {
      firstName: firstName,
      lastName: lastName,
    });

    console.log(response.data.firstName);
  };

  return (
    <>
      <div>register user</div>
      <label>first name</label>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <label>last name</label>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>
      <button onClick={onsubmitHandler}> submit</button>
    </>
  );
}

export default App;
