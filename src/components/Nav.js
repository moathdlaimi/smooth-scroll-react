import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll} from 'react-scroll'; 

const Nav = () => {
    
    return (
        <div className="Nav">
            
            <Link
                className="links"
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-35}
                duration= {800}> HOME </Link>

                <Link
                className="links"
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-35}
                duration= {800}> ABOUT </Link>

                <Link
                className="links"
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-35}
                duration= {800}> PROJECTS </Link>

                <Link
                className="links"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-35}
                duration= {800}> CONTACT </Link>
    
        </div>
    );
}

export default Nav;
