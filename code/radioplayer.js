// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
let channels = [];
fetch("https://api.sr.se/api/v2/channels/?format=json").then((response) =>
  response.json().then((json) => {
    console.log(json);
    channels = json.channels;
    radioPlayer();
  })
);
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

function radioPlayer() {
  const channelsDiv = document.querySelector(".allChannels");

  channels.forEach((channel) => {
    const div = document.createElement("div");
    div.className = "radioContainer";
    div.style.backgroundColor = `#${channel.color}`;
    div.innerHTML = `
        <div>
        <img src="${channel.image}" width="150"></div>
        <div class="radioName"><div>${channel.name}</div>
        <audio controls>    
        <source src="${channel.liveaudio.url}" type="audio/mpeg"/>
        </audio>
        </div>`;
    channelsDiv.appendChild(div);
  });
}
