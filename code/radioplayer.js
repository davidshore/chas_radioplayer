// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const promise = fetch("https://api.sr.se/api/v2/channels/?format=json");
console.log("promise", promise);

// Gör om JSON till Javascript-object
const promise2 = promise.then((response) => {
  console.log("response", response);
  return response.json();
});

promise2.then((data) => {
  data.channels.forEach((channel, index) => {
    var color = "#" + channel.color;

    document.getElementById("channels");

    const channelList = document.getElementById("channels");
    channelList.style = "width: 450px;";

    const channelListItem = document.createElement("div");

    channelListItem.classList.add("channel");
    channelList.appendChild(channelListItem);
    channelListItem.style.display = "flex";
    channelListItem.style.backgroundColor = color;

    const channelListItem1 = document.createElement("div");

    channelListItem1.classList.add("channel1");
    channelListItem.appendChild(channelListItem1);

    const channelListItem2 = document.createElement("div");

    channelListItem2.classList.add("channel2");
    channelListItem.appendChild(channelListItem2);

    const picture = new Image();
    picture.src = channel.imagetemplate;
    picture.height = 100;
    picture.width = 100;

    picture.classList.add("picture");
    channelListItem1.appendChild(picture);

    const h1 = document.createElement("H1");
    h1.textContent = channel.name;

    channelListItem2.appendChild(h1);
    h1.style.marginLeft = "60px";
    h1.style.color = "white";

    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = channel.liveaudio.url;

    sound.style.marginLeft = " 50px";

    channelListItem2.appendChild(sound);
  });
});
