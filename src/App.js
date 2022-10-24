import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [information, setInformation] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  const [confirm, setConfirm] = useState("");

  const [checked, setChecked] = useState("");

  const [errors, setErrors] = useState(["", "", "", "", ""]);

  const DIGIT_EXPRESSION = /^\d$/;

  const passwordExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const buttonOnClick = () => {
    const newList = [...errors];

    if (
      information.name.length < 8 ||
      DIGIT_EXPRESSION.test(information.name[0])
    ) {
      newList[0] = "Name is not valid.";
    } else {
      newList[0] = "";
    }

    if (information.phoneNumber.length < 12) {
      newList[1] = "Phone number is not valid.";
    } else {
      newList[1] = ".";
    }

    if (!passwordExpression.test(information.password)) {
      newList[2] = "Password is not valid.";
    } else {
      newList[2] = "";
    }

    if (confirm !== information.password) {
      newList[3] = "Repeat password is not right.";
    } else {
      newList[3] = "";
    }

    if (checked !== "checked") {
      newList[4] = "Agree to Terms and Conditions.";
    } else {
      newList[4] = "";
    }

    setErrors(newList);
    console.log("errors: ", newList);
  };

  return (
    <div className="container">
      <div className="sign-up">
        <div className="form">
          <h1>Sign up</h1>

          <form>
            <i class="fa fa-user"></i>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              maxLength="16"
              value={information.name}
              onChange={(event) => {
                setInformation({
                  ...information,
                  name: event.target.value.replace(
                    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
                    ""
                  ),
                });
              }}
            />

            <br />

            <p className="error">{errors[0]}</p>

            <i class="fa fa-phone"></i>

            <input
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="Your Phone Number"
              maxLength="12"
              value={information.phoneNumber}
              onChange={(event) => {
                let value = event.target.value;

                if (value.length >= 7) {
                  setInformation({
                    ...information,
                    phoneNumber:
                      value.replace(/\D/g, "").substring(0, 3) +
                      "." +
                      value.replace(/\D/g, "").substring(3, 6) +
                      "." +
                      value.replace(/\D/g, "").substring(6),
                  });
                } else if (value.length >= 3) {
                  setInformation({
                    ...information,
                    phoneNumber:
                      value.replace(/\D/g, "").substring(0, 3) +
                      "." +
                      value.replace(/\D/g, "").substring(3),
                  });
                } else {
                  setInformation({
                    ...information,
                    phoneNumber: value.replace(/\D/g, ""),
                  });
                }
              }}
            />

            <br />

            <p className="error">{errors[1]}</p>

            <i class="fa fa-lock"></i>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              maxLength="16"
              value={information.password}
              onChange={(event) =>
                setInformation({
                  ...information,
                  password: event.target.value,
                })
              }
            />

            <br />

            <p className="error">{errors[2]}</p>

            <i class="fa fa-lock-open"></i>

            <input
              type="password"
              id="repeat-password"
              name="repeat-password"
              placeholder="Repeat your password"
              maxLength="16"
              value={confirm}
              onChange={(event) => {
                setConfirm(event.target.value);
              }}
            />

            <br />

            <p className="error">{errors[3]}</p>

            <div className="agreement">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                value="checked"
                onClick={(event) => setChecked(event.target.value)}
              />

              <label htmlFor="agreement">
                I agree all statements in <a href="#">Terms of service</a>
              </label>
            </div>

            <p className="error">{errors[4]}</p>

            <button type="button" onClick={buttonOnClick}>
              Register
            </button>
          </form>
        </div>

        <div className="member">
          <img
            src={
              "https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
            }
            alt="Sign up"
          />

          <button type="button">I am already member</button>
        </div>
      </div>
    </div>
  );
}
