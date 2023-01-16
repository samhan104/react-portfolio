import React, { useState, useEffect } from "react";
import '../App.css';

function AboutMe() {
    return (
        <>
            <div className="projects" id="projects">
                <div className="row1">
                    <div className="programming">
                        <p>Programming</p>
                    </div>
                    <button id="project-button"><p id="button-text">For all of my projects, <br /> Click here for my Google Drive</p></button>
                    <div className="audios">
                        <p id="audio-title">Audios</p>
                        <div id="audio-projects">
                            <h4 id="audio-project-title">Pgod x HyperX</h4>
                            <p id="audio-description">I was given the opportunity to mix the recorded vocals of this project. My task was to make a clear contrast between the HyperX microphone and the regular recorded audio. I also was tasked to manipulate Pgod’s voice to sound more autotuned and have Toby’s voice sound like it’s waking Pgod up from a dream. I used Logic Pro for this project</p>
                            <iframe src="https://www.youtube.com/watch?v=aIK5E0Oo3o4">
                            </iframe><br />
                            <h4 id="audio-project-title">Be All You Podcast</h4>
                            <p id="audio-description">I currently edit the Be All You Podcast by Ryan Pruitt, and have done so in the past for Season 1 as a co-op during my time at Drexel University.  I use Logic Pro to do all my edits. I was tasked with taking the recorded audio, giving feedback on how to record better, then finding sound effects and inserting them within the podcast, while making the story flow smoothly.</p>
                            <p id="audio-description">Be All You is currently out on podcast streaming services, including <a href="https://open.spotify.com/show/4Lmxes3wxMKaM90kuoxLEB?si=54ea2c4cdeba4b4f" target="_blank">Spotify</a> and <a href="https://podcasts.apple.com/us/podcast/be-all-you/id1518306634" target="_blank">Apple Music</a></p>
                            <p id="audio-description">Listen to Episode 1 below</p>
                            <audio controls>
                                <source src="/audio/BAYS1E1.mp3" type="audio/mpeg"></source>
                            </audio>
                            <h4 id="audio-project-title">Mixes</h4>
                            <h5>HanCastillo_Project2</h5>
                            <p id="audio-description">This project was mixed by me at Drexel’s recording studios, and recorded on Pro Tools. </p>
                            <audio controls>
                                <source src="/audio/HanCastillo_Project2.wav" type="audio/wav"></source>
                            </audio>
                            <h5>Jatek Mixes</h5>
                            <p id="audio-description">The following projects were done for an acquaintance that needed an Asian music mashup. All projects were mixed and completed on Logic Pro. </p>
                            <h5>Jatek Trap v2</h5>
                            <audio controls>
                                <source src="/audio/Jatek Trap Version 2.wav" type="audio/wav"></source>
                            </audio>
                            <h5>Jatek Rock</h5>
                            <audio controls>
                                <source src="/audio/Jatek Rock .wav" type="audio/wav"></source>
                            </audio>
                            <br />
                            <h5>The rest of my work will be in the Google Drive</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe