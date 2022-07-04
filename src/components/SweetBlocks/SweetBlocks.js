/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React, { useState } from "react";
import "./SweetBlocks.css";
import "./towerbox.css";
import Auth from "../././../Auth";
import { useNavigate } from "react-router-dom";
import {Unity, useUnityContext } from "react-unity-webgl";
import { Navigate } from "react-router-dom";
import GameScreen from "./GameScreen";




const SweetBlocks = ()=> {
  const { unityProvider, addEventListener, removeEventListener } =useUnityContext({
    loaderUrl: "../../../build/StackGame.loader.js",
    dataUrl: "../../../build/StackGame.data",
    frameworkUrl: "../../../build/StackGame.framework.js",
    codeUrl: "../../../build/StackGame.wasm",
    webglContextAttributes: {
        preserveDrawingBuffer: true,
    },
  }); 
  const [game1,setgame1] = useState(false);
  const [gameVlaue,setgameValue] = useState(0);
  

  function doPayment() {
    // Auth.connect();
    Auth.doPayment();
    // console.log(Auth.accounts)
  }

  // function toggleFullScreen() {
  //   this.setState({ is_fullscreen: !this.state.is_fullscreen });
  // }

  function spawnEnemies() {
    unityProvider.send("GameController", "SpawnEnemies", 100);
  }

  async function handleClickSpawnEnemies() {
    await unityProvider.send("LoadLevelManager", "LoadLevel", 0);
    
  }

  async function handleClickSpawnEnemies2() {
    await unityProvider.send("LoadLevelManager", "LoadLevel", 1);
  }

  async function handleClickSpawnEnemies3() {
    await unityProvider.send("LoadLevelManager", "LoadLevel", 2);
  }

  async function handleClickSpawnEnemies4() {
    await unityProvider.send("LoadLevelManager", "LoadLevel", 3);
  }
function gameChanger(a){
  setgame1(true);
  setgameValue(a);
}
  
    if(game1 == true){
      return(
        <GameScreen gameValue = {gameVlaue}/>
      )
    }else{
    return (
      // <div
      //     className={
      //         "SweetBlocks" +
      //         (
      //             this.state.is_fullscreen ? ' SweetBlocks__fullscreen ': ''
      //         )
      //     }
      // >
      //     <iframe
      //         allow="fullscreen"
      //         src={
      //             (window.location.hostname == 'localhost')
      //             // ? 'http://localhost/SweetBlocks-web/SweetBlocks.html'
      //             ? 'https://zeeshanbughio.github.io/Games/TowerBox/index.html'
      //             : 'https://gamingarcade.io/games/SweetBlocks-web/SweetBlocks.html'
      //         }
      //         className="SweetBlocks_iframe"
      //     />
      //     <div className="SweetBlocks_fullScreenButton" onClick={this.toggleFullScreen}>
      //         <img src="/images/full-screen-button.png" alt="Switch Full Screen" />
      //     </div>
      // </div>
      <section className="towerBoxSection">
        <div className="towerboxgameparent bg-image-tower">
          <div className="towerboxgame-heading bg-image-heading">
            <img src="/images/towerbox/stack-game.png" alt="" />
          </div>
          <div className="towerboxlevelsparent">
            <div className="towerboxlevels">
              <img src="/images/towerbox/stone_age.png" alt="" />
              <button className="" onClick={()=>{gameChanger(0)}}>
              Play
              </button>
            </div>
            <div className="towerboxlevels">
              <img src="/images/towerbox/ice_age.png" alt="" />
              <button className="" onClick={()=>{gameChanger(1)}}>
                Play
              </button>
            </div>
            <div className="towerboxlevels">
              <img src="/images/towerbox/city_life.png" alt="" />
              <button className="" onClick={()=>{gameChanger(2)}}>
                Play
              </button>
              {/* <Unity
                unityContext={unityContext}
                style={{ width: 1250, height: 800 }}
              /> */}
            </div>
            <div className="towerboxlevels">
              <img src="/images/towerbox/metaverse.png" alt="" />
              <button className="" onClick={()=>{gameChanger(3)}}>
                Play
              </button>
              {/* <Unity
                unityContext={unityContext}
                style={{ width: 1250, height: 800 }}
              /> */}
            </div>
          </div>
          <div className="towerbox-goback">
            <p>Go back to </p>
            <button className="">
              <span>
                <img src="/images/towerbox/small-logo.png" alt="" />
              </span>
              Gamingarcade.io
            </button>
          </div>
        </div>
        {/* <div className="towerboxgamegameover after-gradient bg-image-tower"> */}
           {/* <Unity
            unityContext={unityContext}
            style={{ width: 1080, height: 800 }}
          /> */}
          {/* <div className="towerboxgame-heading bg-image-heading-gameover">
            <img src="/images/towerbox/stack-game.png" alt="" />
          </div>
          <div className="gameOverDiv">
            <div className="gameOverText">
              <h6> GAME OVER </h6>
            </div>
            <div className="gameOverscore">
              <p>score</p>
              <div>
                <span>42</span>
              </div>
            </div>
            <div className="gameOverButtonsSubmit">
              <button className="Hometower">
                <img src="/images/towerbox/homebtn.png" alt="" />
              </button>

              <button className="submittower">
                <img src="/images/towerbox/restart.png" alt="" />
              </button>
            </div>
          </div> */}
        {/* </div> */}
      </section>
    )};
  }


export default SweetBlocks;

