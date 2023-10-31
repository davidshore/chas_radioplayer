// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
const placeholderChannel = document.querySelector('.placeholder')
const channels = document.querySelector('#channels')
const chooseChannel = document.querySelector('.choose-channel')
const channelSelect = document.querySelector('#channel-select')
const chosenChannel = document.querySelector('.chosen-channel')

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
    const url = 'https://api.sr.se/api/v2/channels?format=json&size=100'

    const response = await fetch(url)
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        console.log(data)

        placeholderChannel.classList.add('hide')

        for (let i = 0; i < 3; i++) {
            const channel = document.createElement('div')
            channel.setAttribute('class', 'channel')
            channel.setAttribute('style', `background-color:#${data.channels[i].color};`)

            channel.innerHTML = `<img src="${data.channels[i].image}" alt="${data.channels[i].name} logo">
                <div class="player">
                    <h2>${data.channels[i].name}</h2>
                    <div class="description">
                        <p class="tagline">${data.channels[i].tagline}</p>
                    </div>
                    <audio src="${data.channels[i].liveaudio.url}" type="audio/mpeg" controls></audio>
                    </div>`

            /* const channel = `<div class="channel" style="background-color:#${data.channels[i].color};">
                <img src="${data.channels[i].image}" alt="${data.channels[i].name} logo">
                <div class="player">
                    <h2>${data.channels[i].name}</h2>
                    <div class="description">
                        <p class="tagline">${data.channels[i].tagline}</p>
                    </div>
                    <audio src="${data.channels[i].liveaudio.url}" type="audio/mpeg" controls></audio>
                    </div>
                </div>` */
            channels.insertBefore(channel, chooseChannel)
            /* createChannel(data.channels[i].image, data.channels[i].name, data.channels[i].liveaudio.url, data.channels[i].color) */
        }

        chooseChannel.classList.remove('hide')

        for (let i = 3; i < data.channels.length; i++) {
            channelSelect.insertAdjacentHTML('beforeEnd', `<option value="${data.channels[i].name}">${data.channels[i].name}</option>`)
        }

        channelSelect.addEventListener('input', () => {
            const channel = data.channels.filter(x => x.name === channelSelect.value)[0]
            chosenChannel.innerHTML = `<div class="channel" style="background-color:#${channel.color};">
                <img src="${channel.image}" alt="${channel.name} logo">
                <div class="player">
                  <h2>${channel.name}</h2>
                    <div class="description">
                        <p class="tagline">${channel.tagline}</p>
                    </div>
                    <audio src="${channel.liveaudio.url}" type="audio/mpeg" controls></audio>
                    </div>
                </div>`
        })
    } else {
        console.log('HTTP error: ', response.status)
    }
}
getData()


{/* <div class="description>"
                <h2>${data.channels[i].name}</h2>
                <p class="tagline">${data.channels[i].tagline}</p>
              </div> */}