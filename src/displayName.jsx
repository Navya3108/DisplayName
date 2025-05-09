import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({ firstName: "", lastName: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    let newErrors = { firstName: "", lastName: "" };

    if (!firstName) newErrors.firstName = "Please fill out this field!";
    if (!lastName) newErrors.lastName = "Please fill out this field!";

    setErrors(newErrors);

    // Proceed only if both fields are filled
    if (firstName && lastName) {
      setErrors({ firstName: "", lastName: "" }); // Clear errors
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: "initial" }}>Full Name Display</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>First Name:</h3>
          <input
            type="text"
            placeholder="Enter First Name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: "150px", padding: "4px", fontSize: "14px", marginLeft: "10px" }}
          />
        </div>
        {errors.firstName && <p style={{ color: "red", marginLeft: "10px" }}>{errors.firstName}</p>}

        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <h3>Last Name:</h3>
          <input
            type="text"
            placeholder="Enter Last Name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: "150px", padding: "4px", fontSize: "14px", marginLeft: "10px" }}
          />
        </div>
        {errors.lastName && <p style={{ color: "red", marginLeft: "10px" }}>{errors.lastName}</p>}

        <button type="submit" style={{ marginTop: "15px", padding: "8px 12px", fontSize: "16px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {submitted && firstName && lastName&& <h2 style={{ marginTop: "20px" }}>Full Name: {firstName} {lastName}</h2>}
    </div>
  );
};

export default DisplayName;
