  // Select loader
let loader = document.querySelector("#loader");

// Select inputfield
const inputField = document.querySelector("#inputField");

// Add eventlistener to the inputfield
inputField.addEventListener("input", () => {

// Store inputvalue in variable
let inputValue = inputField.value.toUpperCase();

// Show loader when user enters characters in inputfield
loader.style.display="inline-block";

// Fetch Radio Stations
async function getData() {
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json");
    const data = await response.json();
    
    // Hide loader when fetch is done
    loader.style.display="none";

        // Filter channels with inputvalue
        let filteredChannels = data.channels.filter((i) => {
            return i.name.startsWith(inputValue);
        });

        // Clear the channelContainer with each fetch
        const channelContainer = document.querySelector("#channels");
        channelContainer.innerHTML = "";
        
        // Loop through filtered channels
        filteredChannels.forEach((channel) => {
          
          // Create channel element and set a class to it
          const channelElement = document.createElement("div");
          channelElement.setAttribute("class", "channelElement");
          
          // Add content to each channel element
          channelElement.innerHTML = `
          <div class="picDiv">
              <img src="${channel.image}", alt="Radio channel picture">
          </div>
  
          <div class="rightDiv", style=background-color:#${channel.color}>
  
              <div class="upperRightDiv"> 
                  <h1>${channel.name}</h1>
                  <p>${channel.tagline}</p>
              </div>
  
              <div class="lowerRightDiv">
                  <audio controls><source src="${channel.liveaudio.url}" type="audio/mpeg"/></audio>
              </div>
          </div>
          `;

        // append each channel div to the container div
        channelContainer.appendChild(channelElement);

          // Hide all channels if inputfield is empty
          if (inputValue.length <= 0) {
            channelContainer.innerHTML = "";
          }
  })}
    getData();
  });