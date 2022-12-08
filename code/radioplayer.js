// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
 

//const url = "https://api.sr.se/api/v2/channels/?format=json";
const url = "https://api.sr.se/api/v2/channels/?format=json&size=4"
async function getSometing() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const channels = document.querySelector(".radioList");

  data.channels.forEach((radioList) => {
    const div = document.createElement("div");
    div.innerHTML = `<div><img src="${radioList.image}"</div>
    <div style="background-color: #${radioList.color}">
    <p>"${radioList.tagline}"</p>
    <audio controls 
       <source src="${radioList.liveaudio.url}" type="audio/mpeg"  />
       
    </audio>`;

    channels.appendChild(div);
    div.setAttribute("class", "radioList");
  });
}
getSometing();



  






