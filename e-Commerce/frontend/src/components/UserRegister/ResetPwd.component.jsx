import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../css/UserModel.css";

const ResetPwd = ({ show, handleClose, handleShowLoginModal }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    setIsLoading(true);
    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required.");
      setIsLoading(false);
      return;
    }

    alert(email);

    //future
  };

  if (!show) return null; // Don't render if the modal is not visible

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
      aria-labelledby="reset-password-modal-title"
      aria-hidden={!show}
      role="dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title id="reset-password-modal-title" className="fw-bold">
          Reset your password
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-2">
        <form onSubmit={(e) => e.preventDefault()} aria-describedby="message">
          <div className="d-flex flex-column gap-3">
            <p className="text-start">
              Sign up for early Sale access plus tailored new arrivals, trends,
              and promotions. To opt out, click unsubscribe in our emails.
            </p>

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

            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />

            <p
              className="underline font-weight-light text-start"
              onClick={() => {
                handleClose();
                handleShowLoginModal();
              }}
              role="button"
              tabIndex={0}
            >
              Cancel
            </p>

            <div className="row align-items-center">
              <button
                className="btn btn-dark col-12"
                onClick={handleResetPassword}
                disabled={isLoading}
              >
                {isLoading ? "Sending reset link..." : "Reset Password"}
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPwd;
