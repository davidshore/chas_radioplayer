// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const url = "https://api.sr.se/api/v2/channels/?format=json";

async function myRadioplayer() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const channels = document.querySelector(".listRadio");

  data.channels.forEach((listRadio) => {
    const div = document.createElement("div");
    div.innerHTML = `
    
    <div><img src="${listRadio.image}"</div>
        <div class="thisChannel"<p>"${listRadio.name}"</p>
    <audio controls 
        <source src="${listRadio.liveaudio.url}" type="audio/mpeg" />
        </audio></div>`;

    channels.appendChild(div);
    div.setAttribute("class", "listRadio");
  });
}

myRadioplayer();

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
