// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
const placeholderChannel = document.querySelector('.placeholder')
const channels = document.querySelector('#channels')

/* function createChannel(imgUrl, name, mp3Src, color) {
    const channel = document.createElement('div')
    channel.setAttribute('class', 'channel')
    channel.setAttribute('style', `background-color:#${color};`)

    channel.innerHTML =
        `<img src="${imgUrl}" alt="${name} logo">
    <div class="player">
      <h2>${name}</h2>
      <audio src="${mp3Src}" type="audio/mpeg" controls></audio>
    </div>`;

    return channel;
} */

async function getData() {
    const url = 'http://api.sr.se/api/v2/channels?format=json&size=100'

    const response = await fetch(url)
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        console.log(data)

        placeholderChannel.classList.add('hide')

        for (let i = 0; i < data.channels.length; i++) {
            const channel =
            `<div class="channel" style="background-color:#${data.channels[i].color};">
                <img src="${data.channels[i].image}" alt="${data.channels[i].name} logo">
                <div class="player">
                    <h2>${data.channels[i].name}</h2>
                    <div class="description">
                        <p class="tagline">${data.channels[i].tagline}</p>
                    </div>
                    <audio src="${data.channels[i].liveaudio.url}" type="audio/mpeg" controls></audio>
            </div>
            </div>`/* createChannel(data.channels[i].image, data.channels[i].name, data.channels[i].liveaudio.url, data.channels[i].color) */
            if (i < 3) {
                channels.insertAdjacentHTML('beforeEnd', channel)
            }
        }
    } else {
        console.log('HTTP error: ', response.status)
    }
}
getData()


{/* <div class="description>"
                <h2>${data.channels[i].name}</h2>
                <p class="tagline">${data.channels[i].tagline}</p>
              </div> */}