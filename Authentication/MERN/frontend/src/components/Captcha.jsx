import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Captcha = ({ onCaptchaInputChange }) => {
    const [captchaUrl, setCaptchaUrl] = useState("http://localhost:5000/api/captcha?_=" + Date.now());

    const [captchaInput, setCaptchaInput] = useState("");

    const refreshCaptcha = () => {
        setCaptchaUrl("http://localhost:5000/api/captcha?_=" + Date.now()); // Avoid caching
    };

    const handleChange = (e) => {
        setCaptchaInput(e.target.value);
        onCaptchaInputChange(e.target.value); // Pass input to parent
    };

    return (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div className="flex">
            <img
                src={captchaUrl}
                alt="captcha"
                style={{ height: "50px", display: "block", margin: "0 auto" }}
            />
            <IconButton onClick={refreshCaptcha} aria-label="refresh captcha">
                <RefreshIcon style={{ color: "blue" }} />
            </IconButton>
            <input
                type="text"
                id="captchaInput"
                placeholder="Enter Captcha"
                value={captchaInput}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            
        </div>
    );
};

export default Captcha;