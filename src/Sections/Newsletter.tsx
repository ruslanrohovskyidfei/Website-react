import React, { useState } from 'react';
import { validate } from 'email-validator';

function Newsletter() {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    function Submit() {
        const email = inputValue;
        if(validate(email)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    return (
      <section className="newsletter">
          {isOpen ? <div className="message">Thank you, we will answer you shortly</div> : "" }
          <div className="newsletter-title">
              If you require assistance, please feel free to leave your email address with us, and we'll be happy to help!
          </div>
          <input type="email" className="input-newsletter"
                 placeholder="Enter your email address"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit" className="button-newletter-submit" onClick={() => Submit()}>Submit</button>
      </section>
    );
}
export default Newsletter;