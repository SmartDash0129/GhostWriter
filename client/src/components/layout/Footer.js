import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container p-1">
                <div className="text-center large b">
                    Ghost Writer
                </div>
                <div className="text-center lead b">
                    Privacy Policy
                </div>
                <div className="text-center lead b">
                    &copy; 2023 Ghost Writer
                </div>
            </div>
        )
    }
}

export default Footer;