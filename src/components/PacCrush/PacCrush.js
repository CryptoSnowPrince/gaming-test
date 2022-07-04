/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from "react";

import './PacCrush.css';

class PacCrush extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.is_fullscreen = false;

        this.toggleFullScreen = this.toggleFullScreen.bind(this);
    }

    toggleFullScreen() {
        this.setState({is_fullscreen: !this.state.is_fullscreen});
    }

    render() {
        return (
             <div
                className={
                    "PacCrush" +
                    (
                        this.state.is_fullscreen ? ' PacCrush__fullscreen ': ''
                    )
                }
            >
                <iframe
                    allow="fullscreen"
                    src={
                        (window.location.hostname == 'localhost')
                        ? 'https://zeeshanbughio.github.io/Games/2x2048-master/index.html'
                        // : 'https://gamingarcade.io/games/PacCrush-web/PacCrush.html'
                        : 'http://localhost/PacCrush-web/PacCrush.html'
                    }
                    className="PacCrush_iframe"
                    ref={element => {
                        if (!element) return;
                        element.contentWindow.window.app = window.app;
                    }}
                />
                <div className="PacCrush_fullScreenButton" onClick={this.toggleFullScreen}>
                    <img src="/images/full-screen-button.png" alt="Switch Full Screen" />
                </div>
            </div>
        )
    }
}

export default PacCrush;