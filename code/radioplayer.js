// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

async function getRadioChannels(){
    const  response = await fetch ("https://api.sr.se/api/v2/channels/?format=json"
    );
    const data = await response.json();
    console.log("channels", data.channels);

    const channelsContainer = document.querySelector("#channels");

    data.channels.forEach((channel) => {
        const channelDiv = document.createElement("div");
        channelDiv.setAttribute("class", "channel");
        channelDiv.style.backgroundColor = "#" + channel.color;
        channelDiv.innerHTML = `
        <div class="leftSide" >
         <img src="${channel.image}"
        </div>
        <div class="rightSide" >
            <h1>${channel.name}</h1>
            <audio controls>
            <source src="${channel.liveaudio.url}" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
        </div>`;
        channelsContainer.appendChild(channelDiv);
    });
}

getRadioChannels();

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
