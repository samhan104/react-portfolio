import React from "react";
import '../App.css';

function AboutMe() {
    return (
        <>
            <div className="projects" id="projects">
                <div className="row1">
                    <div className="programming">
                        <p id="programming-title">Programming</p>
                        <h5>Hover for more info <br /> Click to visit page</h5>
                        <a href="https://github.com/samhan104/"><h5>Link to Github</h5></a>
                        <div id="programming-projects">
                            <a id="button-1" href="https://samhanfirstsite.netlify.app" rel="noreferrer" ><button id="programming-project-button-1"><p id="button-title">Initial Portfolio</p></button></a>
                            <p id="programming-description-1">Created with JavaScript, HTML, and CSS with a time limit of one week.</p>
                            <a id="button-2" href="https://quiet-river-45012.herokuapp.com/" rel="noreferrer" target="_blank"><button id="programming-project-button-2"><p id="button-title">Crists</p></button></a>
                            <p id="programming-description-2">MERN CRUD full stack app that’s meant to create a list of items. Initial app was built in a week but broke. Still not at 100%, so I'll have to get back to this one</p>
                            <a id="button-3" href="https://steady-mooncake-d1c73f.netlify.app/" rel="noreferrer" target="_blank"><button id="programming-project-button-3"><p id="button-title-1">Wardrobe App</p></button></a>
                            <p id="programming-description-3">MERN CRUD full stack app that lets people add clothing items to a database and see their wardrobe. It also cansuggest an outfit based on what’s in the wardrobe.. First project that was done in a group setting.</p>
                            <a id="button-4" href="https://thewshlst.herokuapp.com/" rel="noreferrer" target="_blank"><button id="programming-project-button-4"><p id="button-title-1">WSHLST</p></button></a>
                            <p id="programming-description-4">A wishlist app created with React and Django. Users will be able to sign up, add gifts they want, and add friends to see what they want. If they buy a gift, they can mark it as purchased. This was a group project consisting of 4 people, created and finished in the span of a week</p>
                            <h5>More coming soon!</h5>
                        </div>
                    </div>
                    <a id="google-drive" href="https://drive.google.com/drive/folders/1S5veEtGX6SswGuJIOJpE9PKr3C-aJz9j" rel="noreferrer" target="_blank"><button id="project-button"><p id="button-text">For all of my projects, <br /> Click here for my Google Drive</p></button></a>
                    <div className="audios">
                        <p id="audio-title">Audio</p>
                        <div id="audio-projects">
                            <h4 id="audio-project-title">Pgod x HyperX</h4>
                            <p id="audio-description">I was given the opportunity to mix the recorded vocals of this project. My task was to make a clear contrast between the HyperX microphone and the regular recorded audio. I also was tasked to manipulate Pgod’s voice to sound more autotuned and have Toby’s voice sound like it’s waking Pgod up from a dream. I used Logic Pro for this project</p>
                            <iframe src="https://www.youtube.com/embed/aIK5E0Oo3o4" title="DignitasHyperX">
                            </iframe><br />
                            <h4 id="audio-project-title">Be All You Podcast</h4>
                            <p id="audio-description">I currently edit the Be All You Podcast by Ryan Pruitt, and have done so in the past for Season 1 as a co-op during my time at Drexel University.  I use Logic Pro to do all my edits. I was tasked with taking the recorded audio, giving feedback on how to record better, then finding sound effects and inserting them within the podcast, while making the story flow smoothly.</p>
                            <p id="audio-description">Be All You is currently out on podcast streaming services, including <a href="https://open.spotify.com/show/4Lmxes3wxMKaM90kuoxLEB?si=54ea2c4cdeba4b4f" rel="noreferrer" target="_blank">Spotify</a> and <a href="https://podcasts.apple.com/us/podcast/be-all-you/id1518306634" rel="noreferrer" target="_blank">Apple Music</a></p>
                            <p id="audio-description">Listen to Episode 1 below</p>
                            <audio controls>
                                <source src="https://media.githubusercontent.com/media/samhan104/react-portfolio/main/portfolio/public/audio/BAYS1E1.mp3" type="audio/mpeg"></source>
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