/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

import './LandingHowSection.css';

class LandingHowSection extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="LandingHowSection">
                <div className="LandingHowSection_title1">
                    Can My Computer Run this game?
                </div>
                <div className="LandingHowSection_title2">
                    How it works?
                </div>
                <div className="LandingHowSection_sides mainWidth">
                    <div className="LandingHowSection_sides_left">
                        <div className="LandingHowSection_sides_left_title1">
                            Let’s understand the project
                        </div>
                        <div className="LandingHowSection_sides_left_title2">
                            Join in the arcade gaming
                            <div className="LandingHowSection_sides_left_title2_button">
                                <div className="button1">
                                    JOIN WALLET
                                </div>
                            </div>
                        </div>
                        <div className="LandingHowSection_sides_left_desc">
                            Just register your user and upload your ETH wallet to start earning and playing. We are a big cryptocomumnity passionate about arcade games. We offer you fun solutions and the chance to meet people around the world.
                        </div>
                        <div className="LandingHowSection_sides_left_logos">
                            <img src="/images/wallet-logos.png" alt="Gaming Arcade's accepted crypto wallets" className="LandingHowSection_sides_left_logos_img" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingHowSection;