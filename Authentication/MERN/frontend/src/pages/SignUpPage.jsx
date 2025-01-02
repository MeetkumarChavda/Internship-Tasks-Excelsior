import React, { useRef, useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import Captcha from '../components/Captcha';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';

// 6LeOKJoqAAAAAGwkB64fCuPa5AnKz3fFxBYLQPig  site key use in front end
// 6LeOKJoqAAAAAHush0vdaiQoXPn_6-clz-BfVrpa secrate key use in back end 
const SITE_KEY = '6LeOKJoqAAAAAGwkB64fCuPa5AnKz3fFxBYLQPig '

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // To store the error message
    const [recaptchaValue, setRecaptchaValue] = useState("");
    const captchaRef = useRef();
    const [captchaInput, setCaptchaInput] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // captchaRef.current.reset();

        setErrorMessage(""); // Reset error message before submission
        
        // console.log(name, email, phone, city, state , recaptchaValue);
        console.log(name, email, phone, city, state , password);
        try {

            if (password !== confirmPwd) {
                setErrorMessage("Password and confirm password do not match.");
                console.log("Pwd not match ! ")
                return; // Stop further execution
            }

            // const response = await axios.post(`http://localhost:5000/api/signup`,{name, email, phone, city, state , recaptchaValue} );
            const response = await axios.post(`http://localhost:5000/api/signup`,{name, email, phone, city, state, password, captchaInput } );


            if (response.data.success) {
                alert("User registered successfully");
                navigate("/");
        
                // Reset form fields
                setName("");
                setEmail("");
                setPhone("");
                setCity("");
                setState("");
                setPassword("");
                setConfirmPwd("");
                setCaptchaInput("")
              } else {
                // If success is false, display the server-provided message
                setErrorMessage(response.data.message || "Signup failed. Please try again.");
              }

        } catch (error) {
            console.error(error.message);
            alert('Failed to Sign Up');
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    }

    const isValidPhone = /^[0-9]{10}$/.test(phone);
    const handleKeyDown = (e) =>{
        const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
        if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault(); // Prevent non-digit keys
          }
    };

    // const onChange = value =>{
    //     setRecaptchaValue(value);
    // }

    const handleCaptchaChange = (value) => {
        setCaptchaInput(value);
    };

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>

        <form 
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white shadow-lg px-8 py-10 rounded-lg border border-gray-200"
        >
            {/* Error Message */}
            {errorMessage && (
                <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>
            )}

            {/* Name Field */}
            <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Email Field */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Phone Field */}
            <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={handleKeyDown} // Restrict input to digits only
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        isValidPhone || phone === '' ? 'focus:ring-blue-400' : 'focus:ring-red-500'
                    }`}
                />
                {!isValidPhone && phone.length > 0 && (
                    <p className="text-red-500 text-sm mt-2">10-digit number required</p>
                )}
            </div>

            {/* City Field */}
            <div className="mb-6">
                <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">City</label>
                <input
        
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* State Field */}
            <div className="mb-6">
                <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">State</label>
                <input
                    type="text"
                    id="state"
                    placeholder="Enter your state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            {/* captch */}
            {/* <div className="mb-6">
                <ReCAPTCHA
                    sitekey={SITE_KEY}
                    onChange={onChange}
                    ref={captchaRef}
                />
            </div> */}
             {/* Password Field */}
             <div className="mb-6">
                <label htmlFor="pwd" className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                    type="password"
                    id="pwd"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <PasswordStrengthMeter password={password} />

            {/* Confirm Password Field */}
            <div className="mb-6 mt-2">
                <label htmlFor="cpwd" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                <input
                    type="password"
                    id="cpwd"
                    placeholder="confirm password"
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* SVG captcha */}
            <Captcha onCaptchaInputChange={handleCaptchaChange} />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignUpPage