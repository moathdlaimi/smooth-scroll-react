import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';


const Projects = () => {

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    return (
        <div className="Projects" id="projects">
            <button onClick={scrollToTop} className="top-btn">Back to top</button>
        </div>
    );
}

export default Projects;
