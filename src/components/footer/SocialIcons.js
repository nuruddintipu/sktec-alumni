import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";


function SocialIcon({icon, size = "1x", style = {}, className = "", href = ""}) {
    const [hover, setHover] = useState(false);

    const iconStyle = {
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            color: '#222',
            transform: hover ? 'scale(1.2)' : 'scale(1)',
            ...style,
    };

    return (
        <a href={href}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
           target="_blank"
           rel="noopener noreferrer"
           className={className}
           style={{...style}}>

            <FontAwesomeIcon
                style={iconStyle}
                icon={icon}
                size={size}
            />
        </a>
    );
}




function SocialIcons() {

    const styles = {
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
    };


    return (
        <div style={styles}>
            <SocialIcon icon={faTwitter}/>
            <SocialIcon icon={faFacebook}/>
            <SocialIcon icon={faInstagram}/>
            <SocialIcon icon={faLinkedin}/>
        </div>
    );
}

export default SocialIcons;
