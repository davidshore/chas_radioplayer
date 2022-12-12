// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const url = "https://api.sr.se/api/v2/channels/?format=json&size=4";
async function getRadio() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.channels);

  const channelsDiv = document.querySelector(".allChannels");

  data.channels.forEach((channel) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${channel.image}" />
    <div style="background-color: #${channel.color}">
    <p>"${channel.tagline}"</p>
    <audio controls>
       <source src="${channel.liveaudio.url}" type="audio/mpeg"  />
    </audio>
    </div>`;

    channelsDiv.appendChild(div);
    div.setAttribute("class", "allChannelsChild");
  });
}
getRadio();
