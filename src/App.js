/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from 'react';
import Web3 from 'web3';

import './App.css';

import Landing from './components/Landing/Landing.js';
import Page from './components/Page/Page';

import AppStateContext, { AppStateDefault } from './AppState';
import Auth from './Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameScreen from './components/SweetBlocks/GameScreen';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(window.Auth)

        this.setAppState = this.setAppState.bind(this);

        this.state = {
            appState: AppStateDefault,
            setAppState: this.setAppState,
            session: {
                accounts: null
            }
        };

        this.state.appState.login = this.login.bind(this);
        this.state.appState.logout = this.logout.bind(this);

        Auth.init();
    }

    // componentDidMount() {
    //     Auth.web3()
    // }

    setAppState(new_state) {
        this.setState(new_state);
    }

    async login() {
        var result;

        try {
            result = await Auth.login();
        } catch (error) {
            console.log('Error:', error);
        }

        var accounts;
        var network_id;

        try {
            accounts = await Auth.web3.eth.getAccounts();
            network_id = await Auth.web3.eth.net.getId();

            if (accounts) {
                this.setState({ session: { ...this.state.account, account: accounts } });
            }
        } catch (error) {
            console.error("Login Error:", error);
        }

        return {
            accounts: accounts,
            network_id: network_id
        }
    }

    async doPayment({ game_id }) {
        Auth.doPayment({
            // ether: '0.0001',
            // addr: '0x2468e1A762322F594DFfaA90C445adEc2Dd19257',
            // data: {game_id}
        });
    }

    async logout() {
        console.log("App.logout()");
        Auth.logout();
    }

    render() {
        return (
            <AppStateContext.Provider value={this.state}>
                <div className="App">
                    {this.state.session.account
                        ? <Landing ref={(component => { window.landing = component })} />

                        : <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Page />} />
                               
                            </Routes>
                        </BrowserRouter>
                    }
                </div>
            </AppStateContext.Provider>
        );
    }
}

export default App;
