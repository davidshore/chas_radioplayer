// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
async function apiSR() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);

const channel = document.querySelector('.channels');

data.channels.forEach((channels) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div><img src="${channels.image}" width="200"></div>
  <p> ${channels.name} </p> 
  <audio controls> <source src="${channels.liveaudio.url}" type="audio/mpeg" /> </audio>`;
  channel.appendChild(div);
});
  }

apiSR();



// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.




// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
