import "../css/UserModel.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SignUp = ({ show, handleClose, handleShowLoginModal }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle registration submission
  const handleRegister = async () => {
    setIsLoading(true);
    setMessage("");
    setError("");

    const { firstname, lastname, email, password } = formData;

    // Basic validation
    if (!firstname || !lastname || !email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
    alert("Register");
    // Make API call to register user
  };

  if (!show) return null; // Don't render if the modal is not visible

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
      aria-labelledby="signup-modal-title"
      aria-hidden={!show}
      role="dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title id="signup-modal-title" className="fw-bold">
          Register
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-2">
        <form onSubmit={(e) => e.preventDefault()} aria-describedby="message">
          {message && (
            <div id="message" className="text-success small">
              {message}
            </div>
          )}

          {error && (
            <div id="message" className="text-danger small">
              {error}
            </div>
          )}

          <div className="d-flex flex-column gap-3">
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="form-control"
              placeholder="Enter your first name*"
              value={formData.firstname}
              onChange={handleInputChange}
              required
              aria-required="true"
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="form-control"
              placeholder="Enter your last name*"
              value={formData.lastname}
              onChange={handleInputChange}
              required
              aria-required="true"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-required="true"
            />
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password*"
              value={formData.password}
              onChange={handleInputChange}
              required
              aria-required="true"
            />

            <div className="row align-items-center">
              <button
                type="button"
                className="btn btn-dark col-6"
                onClick={handleRegister}
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
              <p
                className="underline col-6 mb-0 fw-semibold"
                style={{ fontSize: "12px" }}
                onClick={() => {
                  handleClose();
                  handleShowLoginModal();
                }}
                role="button"
                tabIndex={0}
              >
                Already have an account? Log in
              </p>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
