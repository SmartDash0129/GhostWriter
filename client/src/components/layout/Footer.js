import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container px-2">
                <div className="text-center lead b">
                    Ghost Writer
                </div>
                <div className="text-center small b">
                    Privacy Policy
                </div>
                <div className="text-center small b">
                    &copy; 2023 Ghost Writer
                </div>
            </div>
        )
    }
}

export default Footer;