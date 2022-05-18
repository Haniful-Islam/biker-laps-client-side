import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <div className="text-center bg-dark  mt-3 py-3">
                <h3 className="text-info">Biker Labs</h3>
                <p className="text-white">Copyright &copy;{year} Biker Labs</p>
                <p className="text-white">All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;