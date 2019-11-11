import React from 'react';


const Footer = () => {
    return (
            <div style={{
                position: 'relative',
                left: '0',
                bottom: '0',
                width: '100%',
                backgroundColor: '#293462',
                color: 'white',
                display: 'flex',
                height: '40px',
            }}>
                <div style={{ width: '100%', margin: '0 10%' }}>
                    <p style={{ fontSize: '12px', fontWeight: '500' }}>&copy; 2019 eksposesulsel.com | Popongan Dev</p>
                </div>
            </div>
    )
}

export default Footer