async function getRadio() {

    const response = await fetch('https://api.sr.se/api/v2/channels/?format=json');
    const data = await response.json();
    console.log(data);

    
    const allChannels = document.querySelector(".allChannels");

    data.channels.forEach((channel) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div><img src="${channel.image}" width="50"></div>
        <div class="name"><div>${channel.name}</div>
        <audio controls>
        <source src="${channel.liveaudio.url}" type="audio/mpeg"/>
        </audio></div>`;

        allChannels.appendChild(div);
    });
}

getRadio();