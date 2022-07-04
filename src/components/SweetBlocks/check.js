/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React from "react";
import "./SweetBlocks.css";
import "./towerbox.css";
import Auth from "../././../Auth";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "../../../build/EmptyTest.loader.js",
  dataUrl: "../../../build/EmptyTest.data",
  frameworkUrl: "../../../build/EmptyTest.framework.js",
  codeUrl: "../../../build/EmptyTest.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true,
  },
});

class check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.doPayment = this.doPayment.bind(this);
    this.state.is_fullscreen = false;
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  doPayment() {
    // Auth.connect();
    Auth.doPayment();
    // console.log(Auth.accounts)
  }

  toggleFullScreen() {
    this.setState({ is_fullscreen: !this.state.is_fullscreen });
  }

  spawnEnemies() {
    unityContext.send("GameController", "SpawnEnemies", 100);
  }

  render() {
    return (
      <>
        <Unity unityContext={unityContext} />
      </>
    );
  }
}

export default check;
