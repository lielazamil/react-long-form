import Modal from "./Modal";
import "./FormStyle.css";
import { useState } from "react";
export default function LongForm() {
  const [errorMessage, seterrorMessage] = useState(null);

  const [loangInput, setLongInputs] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salary: "",
  });
  const [showModal, setShowModal] = useState(false);

  function handleFormSubmit(event) {
    const {age} = loangInput;
    const {phoneNumber}=loangInput;
    seterrorMessage(null);
    if (age < 18 || age > 100) {
      seterrorMessage("the age isn't allowed");
    }else if(phoneNumber.length<10||phoneNumber.length>12){
      seterrorMessage("the phone number isn't allowed");

    }
    event.preventDefault();
    // alert("Form has been submitted successfully");
    setShowModal(true);
  }
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  const btnDisabled =
    loangInput.name == "" ||
    loangInput.age == "" ||
    loangInput.phoneNumber == "";

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="long-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Long form</h1>
        <hr></hr>

        <label> Name</label>
        <input
          value={loangInput.name}
          onChange={(event) => {
            setLongInputs({ ...loangInput, name: event.target.value });
          }}
        />

        <label> phone number</label>
        <input
          value={loangInput.phoneNumber}
          onChange={(event) => {
            setLongInputs({ ...loangInput, phoneNumber: event.target.value });
          }}
        />

        <label> Age</label>
        <input
          value={loangInput.age}
          onChange={(event) => {
            setLongInputs({ ...loangInput, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee</label>
        <input
          type="checkbox"
          checked={loangInput.isEmployee}
          onChange={(event) => {
            setLongInputs({ ...loangInput, isEmployee: event.target.checked });
          }}
        />

        <label>Salary</label>
        <select
          value={loangInput.salary}
          onChange={(event) => {
            setLongInputs({ ...loangInput, salary: event.target.value });
          }}
        >
          <option>less than 500</option>
          <option>500-2000</option>
          <option>more than 2000</option>
        </select>

        <button
          id="submit-button"
          className={btnDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnDisabled}
        >
          Submit
        </button>
        <Modal errorMessage={errorMessage} isVisible={showModal} />
      </form>
    </div>
  );
}
