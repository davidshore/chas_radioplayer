async function srApi() {
    let response = await fetch('https://api.sr.se/api/v2/channels/?format=json');

    if(response.ok) {
        let data = await response.json();


const cha = document.querySelector('.channels');

data.channels.forEach((aaa) => {
    const div = document.createElement("div");
    div.innerHTML = `<p> ${aaa.name} </p> <audio controls> <source src="${aaa.liveaudio.url}" type="audio/mpeg" /> </audio>`;
    cha.appendChild(div);
});
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

srApi();