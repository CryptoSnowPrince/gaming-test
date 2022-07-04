/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

import './LandingAboutSection.css';

class LandingAboutSectionSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.current = 0;

        this.leftItems = [
            <this.leftItem
                key={0}
                innerRef={el => {this.elLeftItems[0] = el}}
            >
                <div className="LandingAboutSection_slider_right_items_item_title1">
                    What is gaming arcade?
                </div>
                <div className="LandingAboutSection_slider_right_items_item_title2">
                    Enjoy and Earn Gaming
                </div>
                <div className="LandingAboutSection_slider_right_items_item_desc">
                    The Gaming Arcade platfotm is a space where you can enjoy classic games like Pac-man, Tetris, Cars, Galaga, Solitaire, and more.
                    You play against another players. The winner earns crypto rewards.
                </div>
            </this.leftItem>,
            <this.leftItem
                key={1}
                innerRef={el => {this.elLeftItems[1] = el}}
            >
                <div className="LandingAboutSection_slider_right_items_item_title1">
                    What is gaming arcade?
                </div>
                <div className="LandingAboutSection_slider_right_items_item_title2">
                    Play Tetris and Earn
                </div>
                <div className="LandingAboutSection_slider_right_items_item_desc">
                    The Gaming Arcade platfotm is a space where you can enjoy classic games like Pac-man, Tetris, Cars, Galaga, Solitaire, and more.
                    You play against another players. The winner earns crypto rewards.
                </div>
            </this.leftItem>,
            <this.leftItem
                key={2}
                innerRef={el => {this.elLeftItems[2] = el}}
            >
                <div className="LandingAboutSection_slider_right_items_item_title1">
                    What is gaming arcade?
                </div>
                <div className="LandingAboutSection_slider_right_items_item_title2">
                    Enjoy and Earn Gaming
                </div>
                <div className="LandingAboutSection_slider_right_items_item_desc">
                    The Gaming Arcade platfotm is a space where you can enjoy classic games like Pac-man, Tetris, Cars, Galaga, Solitaire, and more.
                    You play against another players. The winner earns crypto rewards.
                </div>
            </this.leftItem>
        ];

        this.rightItems = [
            <this.rightItem
                key={0}
                innerRef={el => {this.elRightItems[0] = el}}
                src="/images/landing/about-slider/1.png"
            >
            </this.rightItem>,
            <this.rightItem
                key={1}
                innerRef={el => {this.elRightItems[1] = el}}
                src="/images/landing/about-slider/2.png"
            >
            </this.rightItem>,
            <this.rightItem
                key={2}
                innerRef={el => {this.elRightItems[2] = el}}
                src="/images/landing/about-slider/1.png"
            >
            </this.rightItem>
        ];

        this.switcherItems = this.leftItems.map((_, i) => {
            return <div
                key={i}
                ref={el => {this.elSwitcherItems[i] = el}}
                className="LandingAboutSection_slider_switcher_items_item"

                onClick={event => {
                    this.switch(i);
                }}
                
            >
                <div className="LandingAboutSection_slider_switcher_items_item_icon"></div>
            </div>
        });

        this.elLeftItems = Array(this.leftItems.length).fill(React.createRef());
        this.elRightItems = Array(this.rightItems.length).fill(React.createRef());
        this.elSwitcherItems = Array(this.switcherItems.length).fill(React.createRef());
    }

    componentDidMount() {
        this.switch(0);
    }
    
    leftItem(props) {
        return (
            <div
                ref={props.innerRef}
                className="LandingAboutSection_slider_left_items_item"
            >
                {props.children}
            </div>
        )
    }
    
    rightItem(props) {
        return (
            <div
                ref={props.innerRef}
                className="LandingAboutSection_slider_right_items_item"
            >
                <div className="LandingAboutSection_slider_right_items_item_image">
                    <img src={props.src} alt="" className="LandingAboutSection_slider_right_items_item_image_img" />
                </div>
                {props.children}
            </div>
        )
    }

    switch(index) {
        this.elLeftItems.every((item, item_i) => {
            if (item_i == index) {
                item.classList.add('LandingAboutSection__current');
                this.current = index;
            } else {
                item.classList.remove('LandingAboutSection__current');
            }

            return true;
        });
        
        this.elRightItems.every((item, item_i) => {
            if (item_i == index) {
                item.classList.add('LandingAboutSection__current');
            } else {
                item.classList.remove('LandingAboutSection__current');
            }

            return true;
        });
        
        this.elSwitcherItems.every((item, item_i) => {
            if (item_i == index) {
                item.classList.add('LandingAboutSection__current');
            } else {
                item.classList.remove('LandingAboutSection__current');
            }

            return true;
        });
    }

    render() {
        return (
            <div className="LandingAboutSection_slider">
                <div className="LandingAboutSection_slider_left">
                    <div className="LandingAboutSection_slider_left_items">
                        {this.leftItems}
                    </div>
                </div>
                <div className="LandingAboutSection_slider_right">
                    <div className="LandingAboutSection_slider_right_items">
                        {this.rightItems}
                    </div>
                    <div className="LandingAboutSection_slider_switcher">
                        <div className="LandingAboutSection_slider_switcher_items">
                            {this.switcherItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class LandingAboutSection extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="LandingAboutSection">
                <LandingAboutSectionSlider />
            </div>
        )
    }
}

export default LandingAboutSection;