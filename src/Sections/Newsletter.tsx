import React, { useState } from 'react';
import { validate } from 'email-validator';
import '../Styles/Sections/Newsletter.css';

function Newsletter() {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    function Submit() {
        const email = inputValue;
        if(validate(email) && checked) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
    return (
        <section className="newsletter">
            {isOpen ? <div className="message">Thank you, we will answer you shortly</div> : ""}
            <div className="newsletter-title">
                If you require assistance, please feel free to leave your email address with us, and we'll be happy to
                help!
            </div>
            <div className="checkbox-container">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                        className="custom-input"
                    />
                    <span className="custom-checkbox"></span>
                    <span className="custom-label">I agree to the terms and conditions</span>
                </label>
            </div>
            <input type="email" className="input-newsletter"
                   placeholder="Enter your email address"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}/>
            <button type="submit" className="button-newletter-submit" onClick={() => Submit()}>Submit</button>
        </section>
    );
}

export default Newsletter;