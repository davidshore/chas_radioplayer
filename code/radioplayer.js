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
        channelContainer.innerHTML = " ";
          
        filteredChannels.forEach((channel) => {
          
          // Create div for each channel
          const channelElement = document.createElement("div");
          channelElement.setAttribute("class", "channelElement");
          
          // Create left div for the channel pic & set its classname and content:
          const channelPicDiv = document.createElement("div");
          channelPicDiv.setAttribute("class", "picDiv");
          channelPicDiv.innerHTML = `<img src="${channel.image}" alt="Radio channel picture">`;
          channelElement.appendChild(channelPicDiv);

          // Create right div to hold text and audio tag;
          const channelRightDiv = document.createElement("div");
          channelRightDiv.setAttribute("class", "rightDiv");
          channelRightDiv.style.backgroundColor = `#${channel.color}`;
          
          // Create right upper div to hold channel name + tag
          const upperRightDiv = document.createElement("div");
          upperRightDiv.setAttribute("class", "upperRightDiv");
          upperRightDiv.innerHTML = `
          <h1>${channel.name}</h1>
          <p>${channel.tagline}</p>`;
          
          // Create right lower div to hold channel audio tag
          const lowerRightDiv = document.createElement("div");
          lowerRightDiv.setAttribute("class", "lowerRightDiv");
          lowerRightDiv.innerHTML = `
          <audio controls><source src="${channel.liveaudio.url}" type="audio/mpeg"/></audio>`;

          // append the upper & lower right divs to the main right div
          channelRightDiv.appendChild(upperRightDiv);
          channelRightDiv.appendChild(lowerRightDiv);

          // append main right div to the channel element
          channelElement.appendChild(channelRightDiv);

          // append each channel div to the container div
          channelContainer.appendChild(channelElement);

          // Hide all channels if inputfield is empty
          if (inputValue.length <= 0) {
            channelContainer.innerHTML = "";
          }
  })}
    getData();
  });

