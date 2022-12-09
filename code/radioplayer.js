const containerDiv = document.querySelector(".container")
const containerAudio = document.querySelector(".audio")
const body = document.querySelector("body")
const audioPlayer = document.querySelector("#audio-player")


fetch("https://api.sr.se/api/v2/channels?format=json&pagination=false&indent=true")
.then(res => res.json())
.then(data => {
    data.channels.forEach((object) => {

        //wrapper
        const containerDiv = document.createElement("main")
        containerDiv.classList.add("container")
        
        //background image
        const imageDiv = document.createElement("div")
        imageDiv.style.backgroundImage = `url(${object.image})`
        imageDiv.style.backgroundSize = `cover`
        imageDiv.classList.add("bg-image")

        //section for station name and audio controls
        const radioSection = document.createElement("section")
        radioSection.style.backgroundColor = `#${object.color}`


        //div for station name
        const nameDiv = document.createElement("div")
        nameDiv.textContent = object.name        
        nameDiv.classList.add("name")

        //div for bg audio
        const audioDiv = document.createElement("div")        
        audioDiv.innerHTML = `<audio id="audio-player" controls="controls" src="${object.liveaudio.url}" type="audio/mpeg"></audio>`

        //appends
        body.appendChild(containerDiv)
        containerDiv.appendChild(radioSection)
        //containerDiv.appendChild(imageDiv)
        radioSection.insertAdjacentElement("beforebegin", imageDiv)

        radioSection.appendChild(nameDiv)
        radioSection.appendChild(audioDiv)

     })
}) 

