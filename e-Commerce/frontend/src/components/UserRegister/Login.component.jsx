import "../css/UserModel.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Login = ({
  show,
  handleClose,
  handleShowSignupModal,
  handleShowResetPwdModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setError(""); 

    // Validate input fields
    if (!email || !password) {
      setError("Both email and password are required.");
      setIsLoading(false);
      return;
    }
    alert(`${email}+${password}`);
    
    // Future
    try {
    } catch (error) {}
  };

  if (!show) return null; // Don't render if the modal is not visible

  return (
    <Modal
      show={show}
      onHide={handleClose} 
      centered
      dialogClassName="custom-modal"
      aria-labelledby="login-modal-title" 
      aria-hidden={!show} 
      role="dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title id="login-modal-title" className="fw-bold">
          Log in
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-2">
        <form onSubmit={handleSubmit} aria-describedby="error-message">
          <div className="d-flex flex-column gap-3">
            {error && (
              <div id="error-message" className="text-danger small">
                {error}
              </div>
            )}
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p
              className="underline font-weight-light"
              onClick={() => {
                handleClose();
                handleShowResetPwdModal();
              }}
              role="button"
              tabIndex={0} // Accessible for keyboard navigation
            >
              Forgot your password?
            </p>
            <div className="row align-items-center">
              <button
                type="submit"
                className="btn btn-dark col-6"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
              <p
                className="underline col-6 mb-0 fw-semibold"
                style={{ fontSize: "12px" }}
                onClick={() => {
                  handleClose();
                  handleShowSignupModal();
                }}
                role="button"
                tabIndex={0}
              >
                New customer? Create your account
              </p>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
