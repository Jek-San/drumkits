import React from "react"
import "./drumkits.css"
import CLAP from "../../assets/sounds/clap.wav"
import HIHAT from "../../assets/sounds/hihat.wav"
import KICK from "../../assets/sounds/kick.wav"
import OPENHAT from "../../assets/sounds/openhat.wav"
import BOOM from "../../assets/sounds/boom.wav"
import RIDE from "../../assets/sounds/ride.wav"
import SNARE from "../../assets/sounds/snare.wav"
import TOM from "../../assets/sounds/tom.wav"
import TINK from "../../assets/sounds/tink.wav"
const Drumkits = () => {
  function removeTransition(e) {
    if (e.propertyName !== "transform") return
    e.target.classList.remove("playing")
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return

    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()
  }

  // window.addEventListener('keyup', function(e) {
  //   const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  //   key.classList.remove('playing');

  const keys = Array.from(document.querySelectorAll(".key"))
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition))
  window.addEventListener("keydown", playSound)
  return (
    <div className="keys">
      <div data-key="65" className="key">
        <kbd>A</kbd>
        <span className="sound">clap</span>
      </div>
      <div data-key="83" className="key">
        <kbd>S</kbd>
        <span className="sound">hihat</span>
      </div>
      <div data-key="68" className="key">
        <kbd>D</kbd>
        <span className="sound">kick</span>
      </div>
      <div data-key="70" className="key">
        <kbd>F</kbd>
        <span className="sound">openhat</span>
      </div>
      <div data-key="71" className="key">
        <kbd>G</kbd>
        <span className="sound">boom</span>
      </div>
      <div data-key="72" className="key">
        <kbd>H</kbd>
        <span className="sound">ride</span>
      </div>
      <div data-key="74" className="key">
        <kbd>J</kbd>
        <span className="sound">snare</span>
      </div>
      <div data-key="75" className="key">
        <kbd>K</kbd>
        <span className="sound">tom</span>
      </div>
      <div data-key="76" className="key">
        <kbd>L</kbd>
        <span className="sound">tink</span>
      </div>
      <audio data-key="65" src={CLAP}></audio>
      <audio data-key="83" src={HIHAT}></audio>
      <audio data-key="68" src={KICK}></audio>
      <audio data-key="70" src={OPENHAT}></audio>
      <audio data-key="71" src={BOOM}></audio>
      <audio data-key="72" src={RIDE}></audio>
      <audio data-key="74" src={SNARE}></audio>
      <audio data-key="75" src={TOM}></audio>
      <audio data-key="76" src={TINK}></audio>
    </div>
  )
}

export default Drumkits
