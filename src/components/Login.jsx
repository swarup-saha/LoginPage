import { useState } from "react";
function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState([]);
  function submitForm() {
    const validationErrors = [];
    if (!phone || phone.length !== 10) {
      validationErrors.push("phone should be 10 character");
    }
    if (!password) {
      validationErrors.push("password missing ");
    }
    if (!gender) {
      validationErrors.push("gender misiing");
    }
    setErrors(validationErrors);
  }
  return (
    <>
      <h1>Login Form</h1>
      {errors.length > 0 ? (
        <ul>
          {errors.map((err) => (
            <li style={{ color: "red" }}>{err}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          value={phone}
          type={"number"}
          placeholder="Phone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <select
          value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option>----</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          onClick={() => {
            submitForm();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
