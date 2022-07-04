/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';

import './LandingQuotesSection.css';

import StretchImage from '../../StretchImage/StretchImage';

class LandingQuotesSection extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="LandingQuotesSection">
                <div className="LandingQuotesSection_sides mainWidth">
                    <div className="LandingQuotesSection_sides_left">
                        <div className="LandingQuotesSection_sides_left_title1">
                            What people think?
                        </div>
                        <div className="LandingQuotesSection_sides_left_title2">
                            Press quotes
                        </div>
                        <div className="LandingQuotesSection_sides_left_desc">
                            Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.
                        </div>
                        <div className="LandingQuotesSection_sides_left_more">
                            <div className="button1">
                                Read more testimonials
                            </div>
                        </div>
                    </div>
                    <div className="LandingQuotesSection_sides_right">
                        <div className="LandingQuotesSection_tweetBox" style={{marginTop: '140px', marginLeft: '100px'}}>
                            <div className="LandingQuotesSection_tweetBox_header">
                                <div className="LandingQuotesSection_tweetBox_header_left">
                                    <div className="LandingQuotesSection_tweetBox_avatar">
                                        <div className="LandingQuotesSection_tweetBox_avatar_box">
                                            <StretchImage src="/images/avatars/1.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="LandingQuotesSection_tweetBox_header_right">
                                    <div className="LandingQuotesSection_tweetBox_header_name">
                                        EVAN LAHTI
                                    </div>
                                    <div className="LandingQuotesSection_tweetBox_header_userName">
                                        Gamer
                                    </div>
                                </div>
                            </div>
                            <div className="LandingQuotesSection_tweetBox_text">
                                “One of my gaming highlights of the year.”
                            </div>
                            <div className="LandingQuotesSection_tweetBox_date">
                                January 12, 2022
                            </div>
                            <div className="LandingQuotesSection_tweetBox_twIcon">
                                <i className="icofont-twitter"></i>
                            </div>
                        </div>
                        <div className="LandingQuotesSection_tweetBox" style={{marginTop: '50px', marginLeft: '0px'}}>
                            <div className="LandingQuotesSection_tweetBox_header">
                                <div className="LandingQuotesSection_tweetBox_header_left">
                                    <div className="LandingQuotesSection_tweetBox_avatar">
                                        <div className="LandingQuotesSection_tweetBox_avatar_box">
                                            <StretchImage src="/images/avatars/2.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="LandingQuotesSection_tweetBox_header_right">
                                    <div className="LandingQuotesSection_tweetBox_header_name">
                                        Jada Griffin
                                    </div>
                                    <div className="LandingQuotesSection_tweetBox_header_userName">
                                        Nerdreactor
                                    </div>
                                </div>
                            </div>
                            <div className="LandingQuotesSection_tweetBox_text">
                                “The next big thing in the world of crypto and play 2 earn.”
                            </div>
                            <div className="LandingQuotesSection_tweetBox_date">
                                December 25, 2021
                            </div>
                            <div className="LandingQuotesSection_tweetBox_twIcon">
                                <i className="icofont-twitter"></i>
                            </div>
                        </div>
                        <div className="LandingQuotesSection_tweetBox" style={{marginTop: '50px', marginLeft: '60px'}}>
                            <div className="LandingQuotesSection_tweetBox_header">
                                <div className="LandingQuotesSection_tweetBox_header_left">
                                    <div className="LandingQuotesSection_tweetBox_avatar">
                                        <div className="LandingQuotesSection_tweetBox_avatar_box">
                                            <StretchImage src="/images/avatars/3.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="LandingQuotesSection_tweetBox_header_right">
                                    <div className="LandingQuotesSection_tweetBox_header_name">
                                        Aaron Williams
                                    </div>
                                    <div className="LandingQuotesSection_tweetBox_header_userName">
                                        Gamer
                                    </div>
                                </div>
                            </div>
                            <div className="LandingQuotesSection_tweetBox_text">
                                “The platform is isane. I like so much play Pac-Man with my friends.”
                            </div>
                            <div className="LandingQuotesSection_tweetBox_date">
                                July 5, 2019
                            </div>
                            <div className="LandingQuotesSection_tweetBox_twIcon">
                                <i className="icofont-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingQuotesSection;