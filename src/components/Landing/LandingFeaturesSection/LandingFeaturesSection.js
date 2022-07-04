/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

import './LandingFeaturesSection.css';

class LandingFeaturesSectionSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.current = 0;
    }

    switch(index) {
        this.setState({current: index});
    }

    listItemClasses(index) {
        const c = ['LandingFeaturesSection_list_items_item'];

        if (this.state.current == index) {
            c.push('LandingFeaturesSection__current');
        }
        
        if (index <= this.state.current) {
            c.push('LandingFeaturesSection__passed');
        }
        
        return c.join(' ');
    }

    render() {
        return (
            <div className="LandingFeaturesSection_list">
                <div className="LandingFeaturesSection_list_title1">
                    What's so special?
                </div>
                <div className="LandingFeaturesSection_list_title2">
                    Features
                </div>
                <div className="LandingFeaturesSection_list_items">
                    <div
                        className={this.listItemClasses(0)}
                        onClick={() => {this.switch(0)}}
                    >
                        <div className="LandingFeaturesSection_list_items_item_title">
                            1 vs 1: the winner takes it all
                        </div>
                        <div className="LandingFeaturesSection_list_items_item_desc">
                            You have to defeat other gamers around the world to win Crypto Rewards. Then, you can trade it. Amazing!!!
                        </div>
                        <div className="LandingFeaturesSection_list_items_item_indicator">
                            <div className="LandingFeaturesSection_list_items_item_indicator_point"></div>
                            <div className="LandingFeaturesSection_list_items_item_indicator_line"></div>
                        </div>
                    </div>
                    <div
                        className={this.listItemClasses(1)}
                        onClick={() => {this.switch(1)}}
                    >
                        <div className="LandingFeaturesSection_list_items_item_title">
                            join into a huge list of game
                        </div>
                        <div className="LandingFeaturesSection_list_items_item_desc">
                            You have to defeat other gamers around the world to win Crypto Rewards. Then, you can trade it. Amazing!!!
                        </div>
                        <div className="LandingFeaturesSection_list_items_item_indicator">
                            <div className="LandingFeaturesSection_list_items_item_indicator_point"></div>
                            <div className="LandingFeaturesSection_list_items_item_indicator_line"></div>
                        </div>
                    </div>
                    <div
                        className={this.listItemClasses(2)}
                        onClick={() => {this.switch(2)}}
                    >
                        <div className="LandingFeaturesSection_list_items_item_title">
                            Be part of the arcade family
                        </div>
                        <div className="LandingFeaturesSection_list_items_item_desc">
                            You have to defeat other gamers around the world to win Crypto Rewards. Then, you can trade it. Amazing!!!
                        </div>
                        <div className="LandingFeaturesSection_list_items_item_indicator">
                            <div className="LandingFeaturesSection_list_items_item_indicator_point"></div>
                        </div>
                    </div>
                </div>
                <div className="LandingFeaturesSection_list_items_play">
                    <div className="button2">
                        PLAY NOW
                    </div>
                </div>
            </div>
        )
    }
}

class LandingFeaturesSection extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="LandingFeaturesSection">
                <LandingFeaturesSectionSlider />
            </div>
        )
    }
}

export default LandingFeaturesSection;