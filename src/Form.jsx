import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";

const Form = ({ onSubmit }) => {
  const details = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      gender: "",
      status: "",
      fruits: {
        apple: false,
        grapes: false,
        orange: false,
      },
      dob: "",
      message: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Please enter the User name";
      } else if (values.name.length <= 3) {
        errors.name = "Name should be more than 3 characters";
      }

      if (!values.email.includes("@")) {
        errors.email = "Please enter a valid Email";
      }

      if (!values.country) {
        errors.country = "Please select a country";
      }

      if (!values.gender) {
        errors.gender = "Please select a gender";
      }

      if (!values.status) {
        errors.status = "Please select a marital status";
      }

      if (
        !values.fruits.apple &&
        !values.fruits.grapes &&
        !values.fruits.orange
      ) {
        errors.fruits = "Please select at least one fruit";
      }

      if (!values.dob) {
        errors.dob = "Please enter your date of birth";
      }

      if (!values.message) {
        errors.message = "Please enter a message";
      }

      return errors;
    },

    onSubmit: (values, { resetForm, setFieldTouched, setFieldError }) => {
      // console.log(values);
      onSubmit(values);
      resetForm();
      setFieldTouched("fruits", false); // Reset the touched state for fruits
      setFieldError("fruits", undefined); // Reset the error state for fruits
    },
  });

  return (
    <div className="container mt-5">
      <form onSubmit={details.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={details.values.name}
                onChange={details.handleChange}
                onBlur={details.handleBlur}
                required
              />
              {details.touched.name && (
                <span style={{ color: "red" }}>{details.errors.name}</span>
              )}
            </div>

            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                className="form-control mt-4"
                id="email"
                placeholder="Email"
                value={details.values.email}
                onChange={details.handleChange}
                onBlur={details.handleBlur}
                required
              />
              {details.touched.email && (
                <span style={{ color: "red" }}>{details.errors.email}</span>
              )}
            </div>
            <div className="form-group mt-4">
              {/* <label htmlFor="country">Country</label> */}
              <select
                id="country"
                className="form-control"
                name="country"
                value={details.values.country}
                onChange={details.handleChange}
                onBlur={details.handleBlur}
                required
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="India">India</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="U.S.A">U.S.A</option>
                <option value="England">England</option>
              </select>
              {details.touched.country && (
                <span style={{ color: "red" }}>{details.errors.country}</span>
              )}
            </div>

            {/* gender */}
            <div className="form-group mt-4">
              {/* <label>Gender</label> */}
              <div className="form-check form-check-inline mr-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  checked={details.values.gender === "male"}
                  onChange={details.handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  checked={details.values.gender === "female"}
                  onChange={details.handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              {details.touched.gender && (
                <span style={{ color: "red" }}>{details.errors.gender}</span>
              )}
            </div>

            {/* maritial status */}
            <div className="form-group mt-4">
              {/* <label>Marital Status</label> */}
              <div className="form-check form-check-inline mr-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id="married"
                  name="status"
                  value="married"
                  checked={details.values.status === "married"}
                  onChange={details.handleChange}
                />
                <label className="form-check-label" htmlFor="married">
                  Married
                </label>
              </div>

              <div className="form-check form-check-inline mr-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id="unmarried"
                  name="status"
                  value="unmarried"
                  checked={details.values.status === "unmarried"}
                  onChange={details.handleChange}
                />
                <label className="form-check-label" htmlFor="unmarried">
                  Unmarried
                </label>
              </div>
              {details.touched.status && (
                <span style={{ color: "red" }}>{details.errors.status}</span>
              )}
            </div>

            {/* fruits */}
            <div className="form-group mt-4">
              {/* <label>Fruits</label> */}
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="apple"
                  value={details.values.fruits.apple}
                  onChange={() =>
                    details.setFieldValue(
                      "fruits.apple",
                      !details.values.fruits.apple
                    )
                  }
                  onBlur={details.handleBlur}
                />
                <label className="form-check-label" htmlFor="apple">
                  Apple
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="grapes"
                  value={details.values.fruits.grapes}
                  onChange={() =>
                    details.setFieldValue(
                      "fruits.grapes",
                      !details.values.fruits.grapes
                    )
                  }
                  onBlur={details.handleBlur}
                />
                <label className="form-check-label" htmlFor="grapes">
                  Grapes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="orange"
                  value={details.values.fruits.orange}
                  onChange={() =>
                    details.setFieldValue(
                      "fruits.orange",
                      !details.values.fruits.orange
                    )
                  }
                  onBlur={details.handleBlur}
                />
                <label className="form-check-label" htmlFor="orange">
                  Orange
                </label>
              </div>
              {details.touched.fruits && (
                <span style={{ color: "red" }}>{details.errors.fruits}</span>
              )}
            </div>

            {/* dob */}
            <div className="form-group mt-4">
              {/* <label htmlFor="dob">Date of Birth</label> */}
              <input
                type="date"
                id="dob"
                value={details.values.dob}
                onChange={details.handleChange}
                onBlur={details.handleBlur}
                required
              ></input>
              {details.touched.dob && (
                <span style={{ color: "red" }}>{details.errors.dob}</span>
              )}
            </div>

            {/* message */}
            <div className="form-group mt-4">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                id="message"
                value={details.values.message}
                onChange={details.handleChange}
                onBlur={details.handleBlur}
                cols="30"
                rows="5 "
                placeholder="Message..."
                required
              ></textarea>
              {details.touched.message && (
                <span style={{ color: "red" }}>{details.errors.message}</span>
              )}
            </div>

            {/* button */}
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
