// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
const channelsContainer = document.getElementById('channels');
let nextPage = 'https://api.sr.se/api/v2/channels/?format=json&size=4&page=1';

const getRadioChannels = async () => {

    const response = await fetch(nextPage);

    if (response.ok) {

        const radioJSON = await response.json();

        for (let i = 0; i < radioJSON.channels.length; i++) {

            const logo = radioJSON.channels[i].image;
            const title = radioJSON.channels[i].name;
            const tagline = radioJSON.channels[i].tagline;
            const audiostream = radioJSON.channels[i].liveaudio.url;
            const color = radioJSON.channels[i].color;

            drawChannel(logo, title, tagline, color, audiostream);

        }

        nextPage = radioJSON.pagination.nextpage;

    }
}

const drawChannel = (logo, title, tagline, color, audiostream) => {

    const html = `
    <div class="channel">
        <div class="logo" style="background-image: url(${logo})"></div>
        <div class="audio-container" style="border-left: 0.1rem solid #${color};">
            <div class="text">
            <h2>${title}</h2>
            <p>${tagline}</p>
            </div>
            <div class="audio-player">
                <audio controls preload="auto">
                    <source src="${audiostream}" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    </div>`;

    channelsContainer.innerHTML += html;

}

getRadioChannels();

document.querySelector('button').addEventListener('click', getRadioChannels);


