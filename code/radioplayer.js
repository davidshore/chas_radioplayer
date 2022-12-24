// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>


async function getApi(){
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json")
    const data = await response.json();
    const channelsContainer = document.querySelector("#channels");
        
    data.channels.forEach(element => {
        const channelDiv = document.createElement('div')
        channelDiv.setAttribute('class','channels')
        channelsContainer.appendChild(channelDiv)
        channelDiv.style.backgroundColor = "#" + element.color;
        channelDiv.innerHTML = `
            <div class="leftSide" >
             <img src="${element.image}"
            </div>
            <div class="rightSide" >
                <h1>${element.name}</h1>
                <audio controls>
                <source src="${element.liveaudio.url}" type="audio/mpeg">
                Your browser does not support the audio element.
                </audio>
            </div>`;
    
    
    });
    
    
    
    
    }
    
    getApi()