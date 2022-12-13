const container = document.querySelector(".container");

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
async function radioDataFetch() {
	const url = "http://api.sr.se/api/v2/channels?format=json&size=100";
	const response = await fetch(url)
		.then((response) => (response = response.json()))
		.then((response) => (data = response));
	data = data.channels;

	console.log(data);

	data.forEach((channel) => {
		container.innerHTML += `<div class="radio" style="background-color: #${channel.color}">
		<img class="radio-img" src=${channel.image}>
		<section class="right-side">
			<h2 class="radio-name">${channel.name}</h2>
			<audio controls>
				<source src=${channel.liveaudio.url} type="audio/mpeg" >
			</audio>
		</section>
	</div>`;
	});
}

radioDataFetch();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
