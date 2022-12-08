

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
const channelUrl = 'https://api.sr.se/api/v2/channels/?format=json';
const p1 = document.querySelector('.p1')
const click = document.querySelector('.click');
click.addEventListener('click',()=>{
    fetch(channelUrl)
    .then(response=> response.json())
    .then(radioData=>console.log(radioData.channels[1].id))
    p1.textContent +=` ${ radioData.channels[1].id }`
})
