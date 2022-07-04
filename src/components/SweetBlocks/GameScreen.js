/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import React, { useEffect, useState, useCallback } from "react";
import "./SweetBlocks.css";
import "./towerbox.css";
import Auth from "../././../Auth";

import { Unity, useUnityContext } from "react-unity-webgl";



const GameScreen = ({ gameValue }) => {


    const [isLoaded1, setIsLoaded1] = useState(true)
    const [score, setScore] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false);
    const [userName, setUserName] = useState();
    const { unityProvider, addEventListener, removeEventListener, sendMessage ,isLoaded} = useUnityContext({
        loaderUrl: "../../../build/StackGame.loader.js",
        dataUrl: "../../../build/StackGame.data",
        frameworkUrl: "../../../build/StackGame.framework.js",
        codeUrl: "../../../build/StackGame.wasm",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
        },
    });

    const handleGameOver = useCallback((userName, score) => {
        setIsGameOver(true);
        setUserName(userName);
        setScore(score);
    }, []);
    useEffect(() => {
        
        addEventListener("GameOver", handleGameOver);
        return () => {
            removeEventListener("GameOver", handleGameOver);
        };
    }, [addEventListener, removeEventListener, handleGameOver]);


    function handleClickSpawnEnemies() {

        setIsLoaded1(false)
        addEventListener("error", (e) => {
            console.log("ddddd",);
        });
        sendMessage("LoadLevelManager", "LoadLevel", 0);
        console.log("unity", unityProvider);
    }
    useEffect(()=>{
        if(isLoaded == true){
            sendMessage("LoadLevelManager", "LoadLevel", gameValue);
        }
    },[isLoaded])
   
    return (

        <section className="towerBoxSection">
            <div className="towerboxgamegameover after-gradient bg-image-tower">
                <Unity unityProvider={unityProvider}
                    style={{ width: 1080, height: 800 }} />
                {isGameOver === true && (
                    <p style={{ color: "white" }}>{`Game Over ${userName}! You've scored ${score} points.`}</p>
                )}
            </div>
        </section>
    );

}

export default GameScreen;
