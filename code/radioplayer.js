// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const url = 'https://api.sr.se/api/v2/channels/?format=json'
const container = document.getElementById("channels")

async function getRadioChannels() {
    const response = await fetch(url)
    if(!response.ok) {
        alert("error in response")
        return
    }
    const data = await response.json()

    data.channels.forEach(channel => {
        // for each channel, create a new div element
        const newDiv = document.createElement('div')
        
        // add styling to our newly created div
        newDiv.classList.add("channel")
        newDiv.style.backgroundColor = "#" + channel.color

        // inside our div, create structure 
        newDiv.innerHTML = `
            <div class="left-side" >
                <img src="${channel.image}">
            </div>
            <div class="right-side">
                <h1>${channel.name}</h1>
                <audio 
                    controls
                    src="${channel.liveaudio.url}" 
                    type="audio/mpeg">
                </audio>
            </div>
        `

        // end by adding the created div to the parent
        container.appendChild(newDiv)
    });
}

getRadioChannels()
