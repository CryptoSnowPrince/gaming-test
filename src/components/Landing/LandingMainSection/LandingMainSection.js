/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

import './LandingMainSection.css';

class LandingMainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    
    render() {
        return (
            <div className="LandingMainSection">
                <div className="LandingMainSection_title">
                    EARN PLAYING ARCADE
                </div>
                <div className="LandingMainSection_desc">
                    Experience new community of crypto games
                </div>
                <div className="LandingMainSection_play">
                    <a href="" className="button1" style={{width: '200px'}}>
                        PLAY NOW
                    </a>
                </div>
                <div className="LandingMainSection_down">
                    <div className="LandingMainSection_down_btn">
                        <div className="LandingMainSection_down_btn_label">
                            THE STORY
                        </div>
                        <div className="LandingMainSection_down_btn_icon">
                            <i className="icofont-simple-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingMainSection;