import React from 'react'
import { FaPause, FaChevronLeft, FaBars, FaPlay, FaRedo, FaVolumeUp, FaBackward,FaForward } from 'react-icons/fa'
import rocknroll from './Images/Janrlar/rocknroll.jpg'
function Rock() {
    // const musicPlayerSection=document.querySelector(".music-player-section");
    // let clickCount = 1;
    // musicPlayerSection.addEventListener("click", ()=>{
    //     if(clickCount >= 2){
    //         musicPlayerSection.classList.add("active");
    //         clickCount =1;
    //         return;
    //     }
    //     clickCount++;
    //     setTimeout(() =>{
    //         clickCount = 1;
    //     }, 250);
    // })

    // const backToHomeBtn = document.querySelector('.music-player-section .back-btn');
    // backToHomeBtn.addEventListener('click', ()=>{
    //     musicPlayerSection.classList.remove('active');
    // })

    // const playlistSection = document.querySelector(".playlist");
    // const navBtn = document.querySelector(".music-player-section .nav-btn");
    // navBtn.addEventListener('click', ()=>{
    //     playlistSection.classList.add('active');
    // })

    // const backToMusicPlayer = document.querySelector('.playlist .back-btn');
    // backToMusicPlayer.addEventListener('click', ()=>{
    //     playlistSection.classList.remove('active');
    // })


    return (
        
        <div className="rock">
            <audio src="" id="audio-source"></audio>
            <section className="playlist">
                <div className="play">
                    <FaChevronLeft className="back-btn icon" />
                    <h1 className="play-ad">Playlist</h1>
                </div>

                <div className="queue active">
                    <div className="queue-cover">
                        <img src={rocknroll} alt="" />
                        <FaPause />
                    </div>
                    <p className="name">song 1</p>
                </div>

                <div className="queue">
                    <div className="queue-cover">
                        <img src={rocknroll} alt="" />
                        <FaPause />
                    </div>
                    <p className="name">song 2</p>
                </div>

                <div className="queue">
                    <div className="queue-cover">
                        <img src={rocknroll} alt="" />
                        <FaPause />
                    </div>
                    <p className="name">song 3</p>
                </div>

                <div className="queue">
                    <div className="queue-cover">
                        <img src={rocknroll} alt="" />
                        <FaPause />
                    </div>
                    <p className="name">song 4</p>
                </div>

                <div className="queue">
                    <div className="queue-cover">
                        <img src={rocknroll} alt="" />
                        <FaPause />
                    </div>
                    <p className="name">song 5</p>
                </div>

                <div className="queue">
                    <div className="queue-cover">
                        <img src={rocknroll} alt="" />
                        <FaPause />
                    </div>
                    <p className="name">song 6</p>
                </div>
            </section>
            <section className="music-player-section active">
                <FaChevronLeft className="back-btn icon hide"/>
                <FaBars className="nav-btn icon hide"/>
                <h1 className="current-song-name">song 1</h1>
                <p className="artist-name hide">artist 1</p>
                <img src={rocknroll} className="cover hide" alt="rock" />
                <div className="seek-bar-container">
                    <input type="range" className="music-seek-bar" defaultValue="0" />
                    <p className="current-time hide">00 : 00</p>
                    <p className="duration hide">00 : 00</p>
                </div>

                <div className="controls">
                    <FaRedo className="sipan" />
                    <div className="main">
                        <FaBackward className="sipan active" />
                        <FaPlay className="sipan active" />
                        <FaPause className="sipan" />
                        <FaForward className="sipan active" />

                    </div>
                    <input type="range" className="volume-slider" max="1" defaultValue="1" step="0.1" />
                    <FaVolumeUp className="sipan" />
                </div>


            </section>
        </div>
    )
// let currentMusic = 0;
// const music = document.querySelector('#audio-source');
// const seekBar = document.querySelector('.music-seek-bar');
// const songName = document.querySelector('.current-song-name');
// const artistName = document.querySelector('.artist-name');
// const coverImage = document.querySelector({rocknroll});
// const currentMusicTime = document.querySelector('.current-time');
// const musicDuration = document.querySelector('.duration');

}
export default Rock
