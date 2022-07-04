import React from 'react';

import './Page.css';

import AppStateContext from '../../AppState';

import StretchImage from '../StretchImage/StretchImage';
import Sidebar from '../Sidebar/Sidebar';

import PacCrush from '../PacCrush/PacCrush';
import SweetBlocks from '../SweetBlocks/SweetBlocks';
import Auth from '../././../Auth';

class Page extends React.Component {
    constructor(props) {
        super(props);
        console.log("page")

        // this.state.page = 'slider';
        this.state = {
            isWalletConnected: false,
            page: 'slider',
        };
        
        this.walletConnect = this.walletConnect.bind(this);

        this.gotoPacCrush = this.gotoPacCrush.bind(this);
        this.gotoSweetBlocks = this.gotoSweetBlocks.bind(this);
        this.gotoSlider = this.gotoSlider.bind(this);

        this.pagePacCrush = this.pagePacCrush.bind(this);
        this.pageSweetBlocks = this.pageSweetBlocks.bind(this);
        this.pageSlider = this.pageSlider.bind(this);
    }

    walletConnect() {
        Auth.connect().then((isWalletConnected) => {
            console.log("connected", isWalletConnected)
            this.setState({ isWalletConnected });
        });
    }

    walletDisconnect() {
        this.setState({ isWalletConnected: false });
    }

    gotoPacCrush() {
        Auth.doPayment({
            ether: '0.0001',
            addr: '0x2468e1A762322F594DFfaA90C445adEc2Dd19257',
            data: { game_id: 1 }
        })
        // this.setState({page: 'paccrush'});
    }

    gotoSweetBlocks() {
        this.setState({ page: 'sweetblocks' });
    }

    gotoSlider() {
        this.setState({ page: 'slider' });
    }

    pagePacCrush() {
        return <PacCrush />
    }

    pageSweetBlocks() {
        return <SweetBlocks />
    }

    page() {
        if (this.state.page == 'slider') {
            return this.pageSlider();
        } else if (this.state.page == 'paccrush') {
            return this.pagePacCrush();
        } else if (this.state.page == 'sweetblocks') {
            return this.pageSweetBlocks();
        }
    }

    pageSlider() {
        return (
            <div className="Page_slider">
                <div className="Page_slider_row">
                    <div className="Page_slider_row_box Page_slider_row_box__large">
                        <div className="Page_slider_row_box_bg">
                            <img src="/images/banners/banner-all.png" alt="" className="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                            <div className="Page_slider_row_box_content_title1">
                                MOST POPULAR GAMES
                            </div>
                        </div>
                    </div>
                    <div className="Page_slider_row_box">
                        <div className="Page_slider_row_box_bg">
                            <StretchImage src="/images/banners/banner-paccrush.png" alt="" imgClass="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_logo">
                            <img src="/images/paccrush.png" className="Page_slider_row_box_logo_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                        </div>
                        <div className="Page_slider_row_box_likeBtn">
                            <img src="/images/icons/love.png" alt="Like" className="Page_slider_row_box_likeBtn_img" />
                        </div>
                        <div
                            className="Page_slider_row_box_playBtn"
                            onClick={this.gotoPacCrush}
                        >
                            PLAY NOW gotoPacCrush
                        </div>
                    </div>
                    <div className="Page_slider_row_box">
                        {/* <div className="Page_slider_row_box_bg">
                            <StretchImage src="/images/banners/banner-sweetblocks.png" alt="" imgClass="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                        </div>
                        <div className="Page_slider_row_box_likeBtn">
                            <img src="/images/icons/love.png" alt="Like" className="Page_slider_row_box_likeBtn_img" />
                        </div>
                        <div
                            className="Page_slider_row_box_playBtn"
                            onClick={this.gotoSweetBlocks}
                        >
                            PLAY NOW
                        </div> */}
                        {/* Tower Box */}
                        <div className="Page_slider_row_box_bg">
                            <StretchImage src="/images/banners/banner-towerbox.png" alt="" imgClass="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                        </div>
                        <div className="Page_slider_row_box_likeBtn">
                            <img src="/images/icons/love.png" alt="Like" className="Page_slider_row_box_likeBtn_img" />
                        </div>
                        <div
                            className="Page_slider_row_box_playBtn"
                            onClick={this.gotoSweetBlocks}
                        >
                            PLAY NOW
                        </div>
                    </div>
                </div>
                <div className="Page_slider_row">
                    <div className="Page_slider_row_box">
                        <div className="Page_slider_row_box_bg">
                            <img src="/images/banners/banner-race.png" alt="" className="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                        </div>
                        <div className="Page_slider_row_box_likeBtn">
                            <img src="/images/icons/love.png" alt="Like" className="Page_slider_row_box_likeBtn_img" />
                        </div>
                        <div className="Page_slider_row_box_playBtn">
                            PLAY NOW
                        </div>
                    </div>
                    <div className="Page_slider_row_box">
                        <div className="Page_slider_row_box_bg">
                            <img src="/images/banners/banner-card.png" alt="" className="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                        </div>
                        <div className="Page_slider_row_box_likeBtn">
                            <img src="/images/icons/love.png" alt="Like" className="Page_slider_row_box_likeBtn_img" />
                        </div>
                        <div className="Page_slider_row_box_playBtn">
                            PLAY NOW
                        </div>
                    </div>
                    <div className="Page_slider_row_box Page_slider_row_box__large">
                        <div className="Page_slider_row_box_bg">
                            <img src="/images/banners/banner-trending.png" alt="" className="Page_slider_row_box_bg_img" />
                        </div>
                        <div className="Page_slider_row_box_content">
                            <div className="Page_slider_row_box_content_title2">
                                Trending &amp; Hot
                            </div>
                            <div className="Page_slider_row_box_playBtn">
                                ENTER
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <AppStateContext.Consumer>
                {({ appState, setAppState }) => (
                    <div className="Page">
                        <div className="Page_left">
                            <Sidebar />
                        </div>
                        <div className="Page_right">
                            <div className="Page_right_c mainWidth">
                                <div className="Page_right_logo">
                                    <img className="Page_right_logo_img" src="/images/icons/logo.png" alt="Gaming Arcade" />
                                </div>
                                <div className="Page_header">
                                    <div className="Page_header_left">
                                        <div className="input1">
                                            <input className="input1_rI" placeholder="Search" />
                                            <div className="input1_searchBtn">
                                                <img className="input1_searchBtn_img" src="/images/icons/search.png" alt="Search" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Page_header_right">
                                        <div className="Page_header_menu">
                                            <div className="Page_header_menu_items">
                                                <a
                                                    className="Page_header_menu_items_item"
                                                    title="Home"
                                                    onClick={this.gotoSlider}
                                                >
                                                    home
                                                </a>
                                                <a className="Page_header_menu_items_item" href="" title="Home">
                                                    new
                                                </a>
                                                <a className="Page_header_menu_items_item" href="" title="Home">
                                                    trending
                                                </a>
                                                <a className="Page_header_menu_items_item" href="" title="Home">
                                                    favorites
                                                </a>
                                            </div>
                                            {!this.state.isWalletConnected ? (
                                                <button id="connect-wallet" onClick={this.walletConnect} >Connect</button>
                                            ): (
                                                <button id="disconnect-wallet" onClick={this.walletDisconnect} >Disconnect</button>
                                            )}
                                        </div>
                                        <div className="Page_header_account">
                                            <div className="Page_header_account_accountBtn" onClick={appState.logout}>
                                                <img className="input1_searchBtn_img" src="/images/icons/user.png" alt="Account" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Page_content">
                                    {this.page()}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AppStateContext.Consumer>
        )
    }
}

export default Page;