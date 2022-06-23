import React from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const [firstname, bindFirstName, resetFirstName] = useInput("");
  const [secondname, bindSecondName, resetSecondName] = useInput("");
  const formhandle = (e) => {
    e.preventDefault();
    alert(`Welcome ${firstname} ${secondname}`);
    resetFirstName();
    resetSecondName();
  };
  return (
    <div>
      <form onSubmit={formhandle}>
        <input type="text" {...bindFirstName} />
        <input type="text" {...bindSecondName} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
