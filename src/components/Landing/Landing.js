/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

import './Landing.css';

import AppStateContext from '../../AppState';

import StretchImage from '../StretchImage/StretchImage';

import LandingMainSection from './LandingMainSection/LandingMainSection';
import LandingAboutSection from './LandingAboutSection/LandingAboutSection';
import LandingFeaturesSection from './LandingFeaturesSection/LandingFeaturesSection';
import LandingHowSection from './LandingHowSection/LandingHowSection';
import LandingQuotesSection from './LandingQuotesSection/LandingQuotesSection';
import LandingNewsletterSection from './LandingNewsletterSection/LandingNewsletterSection';

class LandingHeader extends React.Component {
    static contextType = AppStateContext;

    constructor(props) {
        super(props);

        this.state = {};
        this.state.is_mobile_menu_opened = false;

        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

        this.appState = false;
        this.setAppState = false;
    }
    
    openMobileMenu() {
        this.setState({is_mobile_menu_opened: true});
    }
    
    closeMobileMenu() {
        this.setState({is_mobile_menu_opened: false});
    }
    
    toggleMobileMenu() {
        this.setState({is_mobile_menu_opened: !this.state.is_mobile_menu_opened});
    }

    render() {
        return (
            <AppStateContext.Consumer>
                {({appState, setAppState}) => {
                    this.appState = appState;
                    this.setAppState = setAppState;

                    return <div className="Landing_header mainWidth">
                        <div className="Landing_header_sides">
                            <div className="Landing_header_sides_left">
                                <a href="" title="Gaming Arcade">
                                    <img src="/images/icons/logo.png" alt="" className="Landing_header_logo" />
                                </a>
                            </div>
                            <div className="Landing_header_sides_middle">
                                <div className="Landing_header_menu">
                                    <div className="Landing_header_menu_items">
                                        <div className="Landing_header_menu_items_item Landing_header_menu_items_item-main">
                                            MAIN
                                        </div>
                                        <div className="Landing_header_menu_items_item Landing_header_menu_items_item-about">
                                            ABOUT
                                        </div>
                                        <div className="Landing_header_menu_items_item Landing_header_menu_items_item-gameFeatures">
                                            GAME FEATURES
                                        </div>
                                        <div className="Landing_header_menu_items_item Landing_header_menu_items_item-howItWorks">
                                            HOW IT WORKS
                                        </div>
                                        <div className="Landing_header_menu_items_item Landing_header_menu_items_item-quotes">
                                            QUOTES
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Landing_header_sides_right">
                                <div className="Landing_header_sides_right_language">
                                    <div className="Landing_languageSelector">
                                        <div className="Landing_languageSelector_button">
                                            <div className="Landing_languageSelector_button_label">
                                                ENG
                                            </div>
                                            <div className="Landing_languageSelector_button_icon">
                                                <i className="icofont-simple-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Landing_header_sides_right_account">
                                    <div
                                        className="Landing_header_loginButton button1"
                                        onClick={this.appState.login}
                                    >
                                        CONNECT WALLET
                                    </div>
                                </div>
                                <div
                                    className={
                                        "Landing_header_sides_right_mobileMenuBtn "
                                        + (
                                            this.state.is_mobile_menu_opened ? 'Landing__opened': ''
                                        )
                                    }
                                    onClick={this.toggleMobileMenu}
                                >
                                    {
                                        this.state.is_mobile_menu_opened
                                        ? <i className="icofont-close"></i>
                                        : <i className="icofont-navigation-menu"></i>
                                    }
                                </div>
                                <div
                                    className={
                                        "Landing_header_sides_right_mobileMenu "
                                        + (
                                            this.state.is_mobile_menu_opened ? 'Landing__opened': ''
                                        )
                                    }
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        this.closeMobileMenu();
                                    }}
                                >
                                    <div
                                        className="Landing_header_sides_right_mobileMenu_box"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                        }}
                                    >
                                        <div className="Landing_header_sides_right_mobileMenu_box_links">
                                            <a className="Landing_header_sides_right_mobileMenu_box_links_link">
                                                MAIN
                                            </a>
                                            <a className="Landing_header_sides_right_mobileMenu_box_links_link">
                                                ABOUT
                                            </a>
                                            <a className="Landing_header_sides_right_mobileMenu_box_links_link">
                                                GAME FEATURES
                                            </a>
                                            <a className="Landing_header_sides_right_mobileMenu_box_links_link">
                                                HOW IT WORKS
                                            </a>
                                            <a className="Landing_header_sides_right_mobileMenu_box_links_link">
                                                QUOTES
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }}
            </AppStateContext.Consumer>
        )
    }
}

class LandingSectionsSection extends React.Component {
    static contextType = AppStateContext;
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="Landing_sections_section">
                <div className="Landing_sections_section_bg">
                    {this.props.background}
                </div>
                <div className='Landing_sections_section_content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class LandingSections extends React.Component {
    static contextType = AppStateContext;
    
    render() {
        return (
            <div className="Landing_sections">
                <LandingSectionsSection>
                    <LandingSectionsSection
                        background={
                            <StretchImage src="/images/landing/background/1.png" alt="" imgClass="Landing_sections_section_bg_img" />
                        }
                    >
                        <LandingHeader></LandingHeader>
                        <div className="Landing_headerRest">
                            <LandingMainSection />
                        </div>
                    </LandingSectionsSection>
                </LandingSectionsSection>
                <LandingSectionsSection>
                    <LandingSectionsSection
                            background={
                                <StretchImage src="/images/landing/background/2.png" alt="" imgClass="Landing_sections_section_bg_img" />
                            }
                    >
                        <div className="Landing_headerRest">
                            <LandingAboutSection />
                        </div>
                    </LandingSectionsSection>
                </LandingSectionsSection>
                <LandingSectionsSection>
                    <LandingSectionsSection
                            background={
                                <StretchImage src="/images/landing/background/3.png" alt="" imgClass="Landing_sections_section_bg_img" />
                            }
                    >
                        <div className="Landing_headerRest">
                            <LandingFeaturesSection />
                        </div>
                    </LandingSectionsSection>
                </LandingSectionsSection>
                <LandingSectionsSection>
                    <LandingSectionsSection
                            background={
                                <StretchImage src="/images/landing/background/4.png" alt="" imgClass="Landing_sections_section_bg_img" />
                            }
                    >
                        <div className="Landing_headerRest">
                            <LandingHowSection />
                        </div>
                    </LandingSectionsSection>
                </LandingSectionsSection>
                <LandingSectionsSection>
                    <LandingSectionsSection
                            background={
                                <StretchImage src="/images/landing/background/5.png" alt="" imgClass="Landing_sections_section_bg_img" />
                            }
                    >
                        <div className="Landing_headerRest">
                            <LandingQuotesSection />
                        </div>
                    </LandingSectionsSection>
                </LandingSectionsSection>
                <LandingSectionsSection>
                    <LandingSectionsSection
                            background={
                                <StretchImage src="/images/landing/background/6.png" alt="" imgClass="Landing_sections_section_bg_img" />
                            }
                    >
                        <div className="Landing_headerRest">
                            <LandingNewsletterSection />
                        </div>
                    </LandingSectionsSection>
                    <div className="Landing_footer">
                        <div className="Landing_footer_top">
                            <div className="Landing_header mainWidth">
                                <div className="Landing_header_sides">
                                    <div className="Landing_header_sides_left">
                                        <a href="" title="Gaming Arcade">
                                            <img src="/images/icons/logo.png" alt="" className="Landing_header_logo" />
                                        </a>
                                    </div>
                                    <div className="Landing_header_sides_middle">
                                        <div className="Landing_header_menu">
                                            <div className="Landing_header_menu_items">
                                                <div className="Landing_header_menu_items_item Landing_header_menu_items_item-main">
                                                    MAIN
                                                </div>
                                                <div className="Landing_header_menu_items_item Landing_header_menu_items_item-about">
                                                    ABOUT
                                                </div>
                                                <div className="Landing_header_menu_items_item Landing_header_menu_items_item-gameFeatures">
                                                    GAME FEATURES
                                                </div>
                                                <div className="Landing_header_menu_items_item Landing_header_menu_items_item-howItWorks">
                                                    HOW IT WORKS
                                                </div>
                                                <div className="Landing_header_menu_items_item Landing_header_menu_items_item-quotes">
                                                    QUOTES
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Landing_header_sides_right">
                                        <div className="Landing_header_sides_right_social">
                                            <div className="Landing_header_sides_right_social_items">
                                                <a className="Landing_header_sides_right_social_items_item" href="" title="" target="_blank">
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                                <a className="Landing_header_sides_right_social_items_item" href="" title="" target="_blank">
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                                <a className="Landing_header_sides_right_social_items_item" href="" title="" target="_blank">
                                                    <i className="icofont-youtube"></i>
                                                </a>
                                                <a className="Landing_header_sides_right_social_items_item" href="" title="" target="_blank">
                                                    <i className="icofont-twitch"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Landing_footer_bottom mainWidth">
                            <div className="Landing_footer_bottom_left">
                                © 2022 Zelta Tech, Inc. All Rights Reserved
                            </div>
                            <div className="Landing_footer_bottom_right">
                                <div className="Landing_footer_bottom_menu">
                                    <a className="Landing_footer_bottom_menu_link" href="" title="Privacy Policy">
                                        Privacy Policy
                                    </a>
                                    <a className="Landing_footer_bottom_menu_link" href="" title="Terms of Services">
                                        Terms of Services
                                    </a>
                                    <a className="Landing_footer_bottom_menu_link" href="" title="Code of Conduct">
                                        Code of Conduct
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </LandingSectionsSection>
            </div>
        )
    }
}

class Landing extends React.Component {
    static contextType = AppStateContext;
    
    render() {
        return (
            <div className="Landing">
                <LandingSections />
            </div>
        )
    }
}

export default Landing;