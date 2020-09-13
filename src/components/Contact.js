import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';

const Contact = () => {

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    return (
        <div className="Contact" id="contact">
            <button onClick={scrollToTop} className="top-btn">&#x2B06;</button>
        </div>
    );
}

export default Contact;
