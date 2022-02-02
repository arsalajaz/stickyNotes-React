import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>Copyright ⓒ {currentYear}</p>
        </div>
    )
}

export default Footer;