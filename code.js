async function getRadioChannels() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json&size=4"
  );
  const data = await response.json();

  console.log("data", data);

  const channelDiv = document.querySelector("#channels");

  data.channels.forEach((channel) => {
    const div = document.createElement("div");
    div.id = "test";

    div.innerHTML = `
    <img src="${channel.image}" alt="${channel.name}" /> <h2>${channel.name}</h2>
    <audio controls> 
    <source src="${channel.liveaudio.url}" type="audio/mpeg" />" 
    </audio>`;

    channelDiv.appendChild(div);
  });
}

getRadioChannels();
