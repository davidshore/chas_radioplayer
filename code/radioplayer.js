

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>


const channelsInfo = 'https://api.sr.se/api/v2/channels/?format=json';
const channels = document.querySelector('#channels');
const nextBtn = document.querySelector('.nextBtn');
let index = 0;

fetch(channelsInfo)
.then(response=> response.json())
.then(radioData=>{ 
    nextBtn.addEventListener('click',()=>{
        const radioChannels = radioData.channels[index]
        index++ ;
        if (index == radioData.channels.length){
            index = 0;
        }
        nextBtn.textContent = ' Next Channel'
        channels.innerHTML = 
        ` <div class="channels-main">
            <div class="channels-player" >
                <h1>${radioChannels.name}</h1> 
                <audio controls>
                    <source src="${radioChannels.liveaudio.url}" type="audio/mpeg" />
                </audio>
            </div>
            <div class="channels-image" >
                <img src="${radioChannels.image}" alt="">
            </div>
        </div>
        <div class="channels-descript"> <h4>${radioChannels.tagline}</h4> </div>`
    });   
});
  

