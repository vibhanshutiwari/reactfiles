
import React from 'react';
import ReactDOM from 'react-dom'




function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
        <h3>Portals Demo </h3>
        <p>How to use another portal..</p>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo;