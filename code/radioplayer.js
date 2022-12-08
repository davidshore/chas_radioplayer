

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>


const channelsInfo = 'https://api.sr.se/api/v2/channels/?format=json';
const channelsList = document.querySelector('#channels');
const nextBtn = document.querySelector('.nextBtn');
const allChannels = document.querySelector('.all-channels');
let index = 0;

fetch(channelsInfo)
.then(response=> response.json())
.then(radioData=>{ console.log(radioData.channels)
    nextBtn.addEventListener('click',()=>{
        const radioChannels = radioData.channels[index]
        index++ ;
        nextBtn.textContent = ' Next Channel'
        channelsList.innerHTML = 
        ` <div><img src="${radioChannels.image}" alt=""></div>
        <div>
            <h1>${radioChannels.name}</h1> 
            <audio controls>
                 <source src="${radioChannels.liveaudio.url}" type="audio/mpeg" />
            </audio>
             <h4>${radioChannels.tagline}</h4> 
        </div>`
    });
     
});
  

