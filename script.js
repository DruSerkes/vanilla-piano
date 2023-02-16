const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');
const keyArray = Array.from([...whiteKeys, ...blackKeys])

let sound = new Audio();

const handlePlayNote = key => {
  const note = key.target.id;
  console.log(note);
  sound = new Audio(`./assets/${note}.mp3`)
  sound.play()
};

const handleStopPlay = () => {
  sound.pause()
}

keyArray.forEach(key => {
  key.addEventListener('pointerdown', handlePlayNote)
  key.addEventListener('pointerup', handleStopPlay)
})