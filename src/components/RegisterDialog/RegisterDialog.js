import React from "react";

import './RegisterDialog.css';

class RegisterDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="RegisterDialog">
                <div className="RegisterDialog_box">
                    <div className="RegisterDialog_box_sides">
                        <div className="RegisterDialog_box_sides_left">
                            <div className="RegisterDialog_box_sides_left_bg">
                            </div>
                        </div>
                        <div className="RegisterDialog_box_sides_right">
                            <div className="RegisterDialog_box_content">
                                <div className="RegisterDialog_box_title">
                                    <div className="RegisterDialog_box_title_left">
                                        Welcome to
                                    </div>
                                    <div className="RegisterDialog_box_title_right">
                                        <img src="/images/icons/logo.png" />
                                    </div>
                                </div>
                                <div className="RegisterDialog_box_form">
                                    <div className="RegisterDialog_box_form_field">
                                        <div className="RegisterDialog_box_form_field_label">
                                            Full Name
                                        </div>
                                        <div className="RegisterDialog_box_form_field_input">
                                            <input className="RegisterDialog_box_form_field_input_rI" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div className="RegisterDialog_box_form_sep"></div>
                                    <div className="RegisterDialog_box_form_field">
                                        <div className="RegisterDialog_box_form_field_label">
                                            Email
                                        </div>
                                        <div className="RegisterDialog_box_form_field_input">
                                            <input className="RegisterDialog_box_form_field_input_rI" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div className="RegisterDialog_box_form_sep"></div>
                                    <div className="RegisterDialog_box_form_field">
                                        <div className="RegisterDialog_box_form_field_label">
                                            Password
                                        </div>
                                        <div className="RegisterDialog_box_form_field_input">
                                            <input className="RegisterDialog_box_form_field_input_rI" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div className="RegisterDialog_box_form_sep"></div>
                                    <div className="RegisterDialog_box_form_field_submit">
                                        <div className="RegisterDialog_box_form_field_submit_button">
                                            Create Account
                                        </div>
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

export default RegisterDialog;