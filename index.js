var charToSoundMap = new Map();
charToSoundMap.set("w", "tom-1.mp3");
charToSoundMap.set("a", "tom-2.mp3");
charToSoundMap.set("s", "tom-3.mp3");
charToSoundMap.set("d", "tom-4.mp3");
charToSoundMap.set("j", "snare.mp3");
charToSoundMap.set("k", "kick-bass.mp3");
charToSoundMap.set("l", "crash.mp3");

var allBtns = document.querySelectorAll(".set .drum");

for (var i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", function() {
    // alert("Clicked");
    var drum = this.innerText;
    makeSound(drum);
    animation(drum);
  });
}

window.addEventListener("keydown", function(event) {
  var drum = event.key;

  if (charToSoundMap.has(drum)) {
    makeSound(drum);
    animation(drum);
  }

});

function makeSound(drum) {
  var audioSrc = "sounds/" + charToSoundMap.get(drum);
  // alert(audioSrc);
  var audio = new Audio(audioSrc);
  audio.play();
}

function animation(key) {
  var btn = document.querySelector("." + key);
  // btn.classList.toggle("pressed");
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
  }, 100);
}
