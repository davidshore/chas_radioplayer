// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const url = "https://api.sr.se/api/v2/channels/?format=json";

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
/* 
async function displayChannels() {
    data = await getData(url);

    data.channels.forEach((channel) => {
        console.log(channel.name);
        document.body.innerHTML += channel.name;
    });
}

displayChannels(); */

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const channelsDiv = document.querySelector("#channels");

const searchInput = document.querySelector(".search");

/* async function displayChannels(searchString) {
    data = await getData(url + "&size=" + amount);
    document.querySelector(".loading").classList.toggle("hide");
    data.channels.forEach((channel) => {
        channelsDiv.innerHTML += `
        <div class="channel" style="--background:#${channel.color}">
            <img src="${channel.image}">
            <div class="info">
                <h2>${channel.name}</h2>
                <audio controls>
                    <source src="${channel.liveaudio.url}" type="audio/mpeg" />
                <audio>
            <div>
        </div>
        `;
    });
} */

//displayChannels();

// Stretch goals

searchInput.addEventListener("input", () => {
    if (searchInput.value) {
        displayChannels(5, searchInput.value);
    }
    if (!searchInput.value) {
        displayChannels(100);
    }
});

async function displayChannels(amount, searchString) {
    data = await getData(url + "&size=" + amount);
    document.querySelector(".loading").classList.add("hide");
    if (searchString) {
        data = data.channels.filter((channel) =>
            channel.name.toLowerCase().includes(searchString.toLowerCase())
        );
    } else {
        data = data.channels.map((channel) => channel);
    }
    console.log(data);
    channelsDiv.innerHTML = "";
    for (let i = 0; i < Math.min(data.length, amount); i++) {
        channelsDiv.innerHTML += `
        <div class="channel" style="--background:#${data[i].color}">
            <img src="${data[i].image}">
            <div class="info">
                <h2>${data[i].name}</h2>
                <audio controls>
                    <source src="${data[i].liveaudio.url}" type="audio/mpeg" />
                <audio>
            <div>
        </div>
        `;
    }
}

displayChannels(100);
