import React from 'react';

import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="Sidebar_logo">
                    <img className="Sidebar_logo_img" src="/images/icons/logo.png" alt="Gaming Arcade" />
                </div>
                <div className="Sidebar_menu">
                    <div className="Sidebar_menu_button Sidebar_menu_button__acount">
                        <img src="/images/icons/user.png" alt="Account" className="Sidebar_menu_button_img" />
                    </div>
                    <div className="Sidebar_menu_button">
                        <img src="/images/icons/home.png" alt="Home" className="Sidebar_menu_button_img" />
                    </div>
                    <div className="Sidebar_menu_button">
                        <img src="/images/icons/play.png" alt="Play" className="Sidebar_menu_button_img" style={{width: 29.25}} />
                    </div>
                    <div className="Sidebar_menu_button">
                        <img src="/images/icons/shop.png" alt="Shop" className="Sidebar_menu_button_img" />
                    </div>
                    <div className="Sidebar_menu_button">
                        <img src="/images/icons/settings.png" alt="Shop" className="Sidebar_menu_button_img" />
                    </div>
                </div>
                <div className="Sidebar_logoutButton">
                    <img src="/images/icons/logout.png" alt="Shop" className="Sidebar_menu_button_img" />
                </div>
            </div>
        )
    }
}

export default Sidebar;