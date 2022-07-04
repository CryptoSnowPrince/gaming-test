import React from 'react';

import './LandingNewsletterSection.css';

import StretchImage from '../../StretchImage/StretchImage';

class LandingNewsletterSection extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="LandingNewsletterSection">
                <div className="LandingNewsletterSection_sides mainWidth">
                    <div className="LandingNewsletterSection_sides_left">
                        <div className="LandingNewsletterSection_sides_left_image">
                            <img className="LandingNewsletterSection_sides_left_image_img" src="/images/bear.png" alt="" />
                        </div>
                    </div>
                    <div className="LandingNewsletterSection_sides_right">
                        <div className="LandingNewsletterSection_sides_right_title1">
                            Want to stay in touch?
                        </div>
                        <div className="LandingNewsletterSection_sides_right_title2">
                            newsletter SUBSCRIBE 
                        </div>
                        <div className="LandingNewsletterSection_sides_right_desc">
                            In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
                        </div>
                        <div className="LandingNewsletterSection_sides_right_subscribe">
                            <div className="LandingNewsletterSection_sides_right_subscribe_sides">
                                <div className="LandingNewsletterSection_sides_right_subscribe_sides_left">
                                    <div className="LandingNewsletterSection_sides_right_subscribe_input">
                                        <input type="text" className="LandingNewsletterSection_sides_right_subscribe_input_rI" placeholder="Enter your e-mail addres.." />
                                    </div>
                                    <div className="LandingNewsletterSection_sides_right_subscribe_sides_left_label">
                                        Your email address
                                    </div>
                                </div>
                                <div className="LandingNewsletterSection_sides_right_subscribe_sides_right">
                                    <div className="button1">
                                        Subscribe Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingNewsletterSection;